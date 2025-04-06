import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsletterForm } from "@/components/newsletter-form";
import { ContactForm } from "@/components/contact-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BackgroundSlideshow } from "@/components/background-slideshow";
import { useLocation } from "wouter";
import {
  SiGithub,
  SiLinkedin,
  SiUpwork,
} from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";

const services = [
  {
    title: "Basic Consultation",
    description: "Initial POC development and consultation",
    price: "$100",
  },
  {
    title: "Professional Package",
    description: "Comprehensive AI solution development",
    price: "$500",
  },
  {
    title: "Enterprise Solution",
    description: "Full-scale AI system implementation",
    price: "$2000",
  },
];

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CTO at TechCorp",
    content:
      "Exceptional AI expertise and delivered a robust POC that exceeded our expectations.",
    avatar: "AJ",
  },
  {
    name: "Sarah Williams",
    role: "Startup Founder",
    content:
      "Their AI research background brought invaluable insights to our project.",
    avatar: "SW",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    content:
      "Delivered an innovative AI solution that transformed our business processes.",
    avatar: "MC",
  },
];

export default function Home() {
  const [_, setLocation] = useLocation();
  
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToContactSection();
  };
  
  // Function to scroll to the contact section
  const scrollToContactSection = () => {
    // Find the "Ready to Work Together" section first
    const workTogetherSection = document.querySelector('.bg-primary\\/5');
    if (workTogetherSection) {
      workTogetherSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // Fallback to contact form if the section can't be found
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };
  
  const handleServicesClick = () => {
    setLocation("/services");
  };

  // Define the background images with absolute URLs
  const backgroundImages = [
    "/images/bg-image1.jpg",
    "/images/bg-image2.jpg",
  ];
  
  // Check if we need to scroll to contact section after navigation
  useEffect(() => {
    if (sessionStorage.getItem('scrollToContact') === 'true') {
      // Clear the flag
      sessionStorage.removeItem('scrollToContact');
      
      // Delay the scroll slightly to ensure the page is fully rendered
      setTimeout(() => {
        scrollToContactSection();
      }, 500);
    }
  }, []);

  return (
    <div className="flex flex-col gap-8 pb-16">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <BackgroundSlideshow images={backgroundImages} interval={10000}>
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">  
              <h1 className="text-6xl font-bold text-white mb-6">
                Hello! I'm Anwesha Chowdhury
              </h1>
              <p className="text-3xl text-gray-200 mb-8">
                AI Research Engineer | Open Source Contributor | MLOps Dev
              </p>
              <div className="mb-10 mx-auto max-w-2xl">
                <p className="text-2xl text-gray-300">
                  I help companies productionize AI research, leveraging
                  the best MLOps practices and Cuda programming for high inference
                  speed and scalability.
                </p>
              </div>
              <div className="flex justify-center gap-4">
                <Button variant="default" size="lg" onClick={scrollToContact} className="text-lg px-8 py-6">
                  Contact Me
                </Button>
                <Button variant="outline" size="lg" onClick={handleServicesClick} className="text-lg px-8 py-6">
                  View Services
                </Button>
              </div>
            </div>
          </div>
        </BackgroundSlideshow>
      </section>
      
      {/* About Me Section */}
      <section className="container mx-auto px-4 mt-16 text-center">
        <div>
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              As an AI Research Engineer, I specialize in developing
              proof-of-concept solutions that demonstrate the practical
              applications of cutting-edge AI technologies. My expertise lies in
              translating complex AI research into scalable, business-ready
              solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Connect With Me Section */}
      <section className="container mx-auto px-4 mt-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Connect With Me</h2>
        <div className="grid grid-cols-4 gap-6">
          <a
            href="https://www.linkedin.com/in/anwesha-chowdhury/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 group"
          >
            <SiLinkedin className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a 
            href="https://x.com/Anweshac1211" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 group"
          >
            <FaXTwitter className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-medium">X</span>
          </a>
          <a 
            href="https://github.com/AChowdhury1211" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 group"
          >
            <SiGithub className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-medium">GitHub</span>
          </a>
          <a 
            href="https://www.upwork.com/freelancers/~0105df259d22f176e7" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-4 group"
          >
            <SiUpwork className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-medium">Upwork</span>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 mt-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <p className="text-2xl font-bold">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>



      {/* Testimonials Section */}
      <section className="container mx-auto px-4 mt-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Client Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar>
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Ready to Work Together Section */}
      <section className="container mx-auto px-4 bg-primary/5 py-12 rounded-lg mt-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground">
            Let's develop innovative AI solutions that drive your business
            forward
          </p>
        </div>
        <Card id="contact">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </section>


    </div>
  );
}
