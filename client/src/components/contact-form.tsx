import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { apiRequest } from "@/lib/queryClient";

export function ContactForm() {
  const { toast } = useToast();
  // Create a custom schema with better validation
  const contactFormSchema = insertContactSchema.extend({
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    serviceTier: z.string().min(1, "Please select a service tier"),
  });
  
  // Log validation schema for debugging
  console.log("Contact form validation schema:", contactFormSchema);

  const form = useForm<InsertContact>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      serviceTier: "",
    },
  });
  
  // Add form state debugging
  console.log("Form errors:", form.formState.errors);

  const mutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      console.log("Submitting contact form data:", data);
      try {
        const response = await apiRequest("POST", "/api/contact", data);
        console.log("Contact form submission successful:", response);
        return response;
      } catch (error) {
        console.error("Contact form submission error:", error);
        throw error;
      }
    },
    onSuccess: () => {
      console.log("Contact form submission success callback triggered");
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      console.error("Contact form submission error callback:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(
        (data) => {
          console.log("Form submitted with valid data:", data);
          mutation.mutate(data);
        }, 
        (errors) => {
          console.error("Form submission failed with validation errors:", errors);
        }
      )} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="serviceTier"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Tier</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service tier" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="initial">S → Initial Consultation</SelectItem>
                  <SelectItem value="foundation">A → Foundation Package</SelectItem>
                  <SelectItem value="implementation">B → Implementation Package</SelectItem>
                  <SelectItem value="enterprise">C → Enterprise Solution</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell me about your project..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={mutation.isPending}>
          Send Message
        </Button>
      </form>
    </Form>
  );
}
