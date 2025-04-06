import { type Subscription, type InsertSubscription, type Contact, type InsertContact } from "@shared/schema";
import sgMail from "@sendgrid/mail";

// Initialize SendGrid with API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.log("SendGrid initialized successfully");
} else {
  console.warn("SENDGRID_API_KEY not found. Email sending will be disabled.");
}

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
      // Only try to send email if SendGrid API key is available
      if (process.env.SENDGRID_API_KEY) {
        // Create email message
        const msg = {
          to: 'achowdhury1211@gmail.com', // Your email address
          from: 'portfolio@example.com', // This should be a verified sender in your SendGrid account
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
        
        // Send email
        await sgMail.send(msg);
        console.log('Email sent successfully');
      } else {
        // Log that email would be sent in a real environment
        console.log(`Would send email to: achowdhury1211@gmail.com`);
        console.log(`From: ${contact.name} (${contact.email})`);
        console.log(`Service Tier: ${contact.serviceTier}`);
        console.log(`Message: ${contact.message}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // We don't throw the error so the API call still succeeds even if email sending fails
    }
    
    return submission;
  }
}

export const storage = new MemStorage();
