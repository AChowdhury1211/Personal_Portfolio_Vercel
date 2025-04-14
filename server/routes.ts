import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertSubscriptionSchema, insertContactSchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  app.get("/api/get-formspree-id", (req, res) => {
    try {
      const formId = process.env.FORMSPREE_FORM_ID || '';
      console.log("Serving Formspree form ID:", formId ? "ID available" : "ID not available");
      res.json({ formId });
    } catch (error) {
      console.error("Error serving Formspree ID:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  app.post("/api/subscribe", async (req, res) => {
    try {
      const data = insertSubscriptionSchema.parse(req.body);
      const subscription = await storage.createSubscription(data);
      res.json(subscription);
    } catch (error) {
      res.status(400).json({ message: "Invalid subscription data" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(data);
      res.json(contact);
    } catch (error) {
      res.status(400).json({ message: "Invalid contact data" });
    }
  });

  return createServer(app);
}
