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
    title: "Initial Consultation",
    description: "1-hour strategy call with expert evaluation and recommendations",
    price: "$500",
  },
  {
    title: "Foundation Package",
    description: "20 hours of dedicated research and unlimited email support per month",
    price: "$9,500/month",
  },
  {
    title: "Implementation Package",
    description: "Complete proof-of-concept development with custom model adaptation",
    price: "Starts at $45k",
  },
  {
    title: "Enterprise Solution",
    description: "End-to-end custom AI solution from research to production",
    price: "Starts at $110k",
  },
];

const testimonials = [
  {
    name: "Gaurav Dhamijia",
    role: "Principal Solutions Architect at AWS",
    content:
      "Anwesha demonstrated strong expertise in AI/ML and Generative AI domains, delivering high-quality work on POCs involving AWS Generative AI services especially Amazon Bedrock. Her communication was clear and timely, ensuring alignment throughout the project. I would strongly recommend her for similar projects.",
    avatar: "GD",
  }
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
                AI Research Engineer | Open Source Contributor | MLOps Expert
              </p>
              <div className="mb-10 mx-auto max-w-2xl">
                <p className="text-2xl text-gray-300">
                  I help companies productionize AI research, implementing robust MLOps practices and low-level CUDA programming to achieve improved inference speed, performance and scalability.
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
            <p className="mb-6">
              I'm an AI/ML Research Engineer, MLOps Specialist, and an independent consultant. I specialize in generative AI for Image generation, Computer Vision and 3D applications.
            </p>
            
            <p className="mb-6">
              In just over a year of focused AI development and research, I've helped multiple startups in transforming cutting-edge AI research into production-ready solutions. I build complete pipelines that solve real business problems, reducing costs and improving efficiency/speed.
            </p>

            <p className="mb-6">
              When I'm not leading AI teams, I work as an independent consultant and mentor for professionals entering the AI field.
            </p>

            <div className="mb-6 text-center">
              <p className="mb-2">
                I run a solo consulting practice focused on helping startups build better practices as they transition to AI. My expertise includes:
              </p>
              
              <div className="mb-2 mx-auto" style={{ textAlign: 'center', maxWidth: '680px', display: 'inline-block' }}>
                <p className="text-left mb-2 pl-20" style={{ textAlign: 'left' }}>• Transforming research papers into working proof-of-concepts (POCs)</p>
                <p className="text-left mb-2 pl-20" style={{ textAlign: 'left' }}>• Building production-ready generative AI pipelines</p>
                <p className="text-left mb-2 pl-20" style={{ textAlign: 'left' }}>• Deploying AI solutions on AWS, GCP, Azure, Runpod or Replicate using MLOps best practices including CI/CD pipelines, containerization, monitoring, and IAC.</p>
              </div>
            </div>

            <p className="text-left mb-2" style={{ textAlign: 'left' }}>
              I'm also the creator of AIChronicles, a blog that focuses on sharing insights from cutting-edge research papers on various AI-related topics and the application of MLOps to optimize development and deployment.
            </p>

            <p className="mb-6">
              Currently, I'm also interested in working on Robotics projects.
            </p>

            <p className="mb-6">
              Available for full-time consultation engagements only (6+ month minimum)
            </p>
            
            <p>
              Feel free to reach out if you're interested in discussing potential collaborations or exploring how my expertise can benefit your AI initiatives.
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
