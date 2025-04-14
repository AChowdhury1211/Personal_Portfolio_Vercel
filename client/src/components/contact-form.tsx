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
    <div className="contact-section w-full bg-gradient-to-br from-slate-900 to-slate-800 py-16 px-4 relative" style={{ 
      backgroundImage: `url('/images/bg-image1.svg')`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <div className="max-w-xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">SEND ME EMAIL</h1>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-xl">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          placeholder="Name" 
                          className="bg-white/20 border-0 text-white placeholder:text-gray-300" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="Email" 
                          className="bg-white/20 border-0 text-white placeholder:text-gray-300" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage className="text-red-300" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="serviceTier"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white/20 border-0 text-white">
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
                    <FormMessage className="text-red-300" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea 
                        placeholder="Message"
                        className="min-h-[120px] bg-white/20 border-0 text-white placeholder:text-gray-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-red-300" />
                  </FormItem>
                )}
              />

              <div className="text-center">
                <Button 
                  type="submit" 
                  className="w-full md:w-auto px-8 py-2 bg-white text-slate-900 hover:bg-gray-100 transition-all duration-300 font-medium" 
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Sending..." : "Submit"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
