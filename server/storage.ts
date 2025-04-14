import { type Subscription, type InsertSubscription, type Contact, type InsertContact } from "@shared/schema";

// We're using Formspree for contact form email processing
console.log("Using Formspree for contact form processing");

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
    
    // We're using Formspree for email delivery, so we're just storing the data here
    console.log('Contact form submission stored:');
    console.log(`Name: ${contact.name}`);
    console.log(`Email: ${contact.email}`);
    console.log(`Service Tier: ${contact.serviceTier}`);
    
    return submission;
  }
}

export const storage = new MemStorage();
