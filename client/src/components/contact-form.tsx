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
  
  // Create a form for Formspree
  const handleFormspreeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // We don't need to prevent default as we want the form to submit normally to Formspree
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  return (
    <div className="contact-section w-full py-24 px-4 relative" style={{ 
      backgroundImage: `url('/images/bg-image1.svg')`, 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-gray-200 mb-6">
            Let's develop innovative AI solutions that drive your business forward
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm p-10 rounded-lg shadow-2xl">
          <form 
            method="POST" 
            action="https://formspree.io/f/mdknkgrn" 
            className="space-y-8"
            onSubmit={handleFormspreeSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="form-group">
                <Input 
                  type="text" 
                  name="username" 
                  id="username" 
                  placeholder="Name" 
                  required
                  className="bg-black/50 border border-white/20 text-white placeholder:text-gray-300 h-12" 
                />
              </div>
              
              <div className="form-group">
                <Input 
                  type="email" 
                  name="email" 
                  id="email" 
                  placeholder="Email" 
                  required
                  className="bg-black/50 border border-white/20 text-white placeholder:text-gray-300 h-12" 
                />
              </div>
            </div>

            <div className="form-group">
              <select 
                name="service" 
                id="service" 
                required
                className="w-full bg-black/50 border border-white/20 text-white placeholder:text-gray-300 h-12 rounded-md px-3"
                defaultValue=""
              >
                <option value="" disabled className="bg-black/90 text-gray-200">Select a service tier</option>
                <option value="initial" className="bg-black/90 text-white">S → Initial Consultation</option>
                <option value="foundation" className="bg-black/90 text-white">A → Foundation Package</option>
                <option value="implementation" className="bg-black/90 text-white">B → Implementation Package</option>
                <option value="enterprise" className="bg-black/90 text-white">C → Enterprise Solution</option>
              </select>
            </div>

            <div className="form-group">
              <Textarea 
                name="message" 
                id="message" 
                rows={8} 
                placeholder="Message"
                className="min-h-[160px] bg-black/50 border border-white/20 text-white placeholder:text-gray-300"
                required
              />
            </div>

            <div className="text-center">
              <Button 
                type="submit" 
                className="w-full md:w-auto px-10 py-6 bg-white text-slate-900 hover:bg-gray-100 transition-all duration-300 font-medium text-lg" 
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
