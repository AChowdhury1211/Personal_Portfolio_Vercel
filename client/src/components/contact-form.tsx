import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Create a form for Formspree
  const handleFormspreeSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
        
        <div className="bg-black/30 backdrop-blur-sm p-10 rounded-lg shadow-2xl border border-white/10">
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
                  name="name" 
                  id="name" 
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
                name="serviceTier" 
                id="serviceTier" 
                required
                className="w-full bg-black/50 border border-white/20 text-white placeholder:text-gray-300 h-12 rounded-md px-3"
                defaultValue=""
              >
                <option value="" disabled className="bg-black/90 text-gray-200">Select a service tier</option>
                <option value="Initial Consultation" className="bg-black/90 text-white">S → Initial Consultation</option>
                <option value="Foundation Package" className="bg-black/90 text-white">A → Foundation Package</option>
                <option value="Implementation Package" className="bg-black/90 text-white">B → Implementation Package</option>
                <option value="Enterprise Solution" className="bg-black/90 text-white">C → Enterprise Solution</option>
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
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
