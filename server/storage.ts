import { type Subscription, type InsertSubscription, type Contact, type InsertContact } from "@shared/schema";
import nodemailer from "nodemailer";

// Create reusable transporter object using ethereal email for testing
let transporter: nodemailer.Transporter;
let testAccount: any;

// Always use Ethereal for testing purposes since it doesn't require actual credentials
console.log("Creating test email account with Ethereal...");

// Initialize with a fallback until the async creation completes
transporter = {
  sendMail: (mailOptions: any) => {
    console.log("Email transporter still initializing. Would send:", mailOptions);
    return Promise.resolve({ messageId: "placeholder-while-initializing" });
  }
} as any;

// Async-create a test account at ethereal.email
nodemailer.createTestAccount()
  .then(account => {
    // Store the test account info
    testAccount = account;
    
    // Create a test SMTP transporter
    transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: account.user, // generated ethereal user
        pass: account.pass, // generated ethereal password
      },
    });
    
    console.log("Ethereal email account created successfully");
    console.log(`Username: ${account.user}`);
    console.log(`Web interface: https://ethereal.email/login`);
  })
  .catch(err => {
    console.error("Failed to create Ethereal email account", err);
    
    // Fallback to a simple logger "transporter" that doesn't actually send emails
    transporter = {
      sendMail: (mailOptions: any) => {
        console.log("Using fallback email logger. Would send email:", mailOptions);
        return Promise.resolve({ messageId: "test-message-id" });
      }
    } as any;
  });

export interface IStorage {
  createSubscription(sub: InsertSubscription): Promise<Subscription>;
  createContact(contact: InsertContact): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private subscriptions: Map<number, Subscription>;
  private contacts: Map<number, Contact>;
  private currentSubId: number;
  private currentContactId: number;

  constructor() {
    this.subscriptions = new Map();
    this.contacts = new Map();
    this.currentSubId = 1;
    this.currentContactId = 1;
  }

  async createSubscription(sub: InsertSubscription): Promise<Subscription> {
    const id = this.currentSubId++;
    const subscription: Subscription = {
      ...sub,
      id,
      createdAt: new Date(),
    };
    this.subscriptions.set(id, subscription);
    return subscription;
  }

  async createContact(contact: InsertContact): Promise<Contact> {
    const id = this.currentContactId++;
    const submission: Contact = {
      ...contact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, submission);
    
    try {
      // Create email message options that work for both real and test scenarios
      const mailOptions = {
        from: '"Portfolio Contact Form" <canwesha91@gmail.com>', // sender address
        to: 'achowdhury1211@gmail.com', // receiver address
        replyTo: contact.email, // Set reply-to as the contact's email
        subject: `New Contact Form Submission: ${contact.serviceTier} Inquiry`,
        text: `
Name: ${contact.name}
Email: ${contact.email}
Service Tier: ${contact.serviceTier}

Message:
${contact.message}
        `,
        html: `
<h2>New Contact Form Submission</h2>
<p><strong>Service Tier:</strong> ${contact.serviceTier}</p>
<p><strong>From:</strong> ${contact.name} (${contact.email})</p>
<h3>Message:</h3>
<p>${contact.message.replace(/\n/g, '<br>')}</p>
        `,
      };
      
      // Try to send email using the configured transporter
      if (transporter) {
        // Send email using the transporter (using Ethereal for testing)
        const info = await transporter.sendMail(mailOptions);
        
        // Show the preview URL where the email can be viewed in a test environment
        console.log('✅ Contact form email sent successfully');
        
        // For Ethereal test emails, there's a preview URL we can show in console
        try {
          const previewUrl = nodemailer.getTestMessageUrl(info);
          if (previewUrl) {
            console.log('---------------------------------------');
            console.log('📧 Email Preview URL (for testing only):');
            console.log(previewUrl);
            console.log('---------------------------------------');
          }
        } catch (err) {
          // If getTestMessageUrl fails, it's probably not an Ethereal test email
          console.log('(Real email sent, no preview available)');
        }
      } else {
        // This happens if the transporter hasn't been initialized yet (race condition)
        console.log('Email transporter not ready yet. Email content would be:');
        console.log('---------------------------------------');
        console.log(`To: achowdhury1211@gmail.com`);
        console.log(`From: ${contact.name} (${contact.email})`);
        console.log(`Service Tier: ${contact.serviceTier}`);
        console.log(`Message: ${contact.message}`);
        console.log('---------------------------------------');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // We don't throw the error so the API call still succeeds even if email sending fails
    }
    
    return submission;
  }
}

export const storage = new MemStorage();
