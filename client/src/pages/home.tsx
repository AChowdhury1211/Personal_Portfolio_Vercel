import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsletterForm } from "@/components/newsletter-form";
import { ContactForm } from "@/components/contact-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { BackgroundSlideshow } from "@/components/background-slideshow";
import {
  SiGithub,
  SiLinkedin,
  SiYoutube,
  SiUpwork,
  SiFiverr,
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
  {
    name: "Michael Chen",
    role: "Product Manager",
    content:
      "Delivered an innovative AI solution that transformed our business processes.",
    avatar: "MC",
  },
];

export default function Home() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Define the background images with absolute URLs
  const backgroundImages = [
    "./images/bg-image1.jpg",
    "./images/bg-image2.jpg",
  ];

  return (
    <div className="flex flex-col gap-8 pb-16">
      {/* Hero Section */}
      <section className="relative h-[750px] flex items-center">
        <BackgroundSlideshow images={backgroundImages} interval={10000}>
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              {/* Main Logo - larger size in hero section */}
              <div className="mb-8 flex justify-center">
                <div className="w-full max-w-2xl bg-purple-900 p-10 rounded-lg shadow-2xl">
                  <img 
                    src="https://raw.githubusercontent.com/AlvinChiou/screenshots/master/AIC_Logo_Purple.png" 
                    alt="AIChronicles Logo" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              
              <h1 className="text-5xl font-bold text-white mb-6">
                Hello! I'm Anwesha Chowdhury
              </h1>
              <p className="text-2xl text-gray-200 mb-8">
                AI Research Engineer | Open Source Contributor | MLOps Dev
              </p>
              <div className="mb-10 mx-auto max-w-2xl">
                <p className="text-xl text-gray-300">
                  I help companies productionizing AI research, while leveraging
                  the best MLOps practices and Cuda programming for high inference
                  speed and scalability.
                </p>
              </div>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="lg" onClick={scrollToContact} className="text-lg px-8 py-6">
                  Contact Me
                </Button>
              </div>
            </div>
          </div>
        </BackgroundSlideshow>
      </section>
      
      {/* About Me Section */}
      <section className="container mx-auto px-4 mt-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/4">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <img 
                src="https://raw.githubusercontent.com/AlvinChiou/screenshots/master/AC_Logo_Grey.png" 
                alt="AC Logo" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="w-full md:w-3/4">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
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
        </div>
      </section>

      {/* Connect With Me Section */}
      <section className="container mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold mb-8">Connect With Me</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <a
            href="#linkedin"
            className="flex flex-col items-center gap-4 group"
          >
            <SiLinkedin className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-medium">LinkedIn</span>
          </a>
          <a href="#youtube" className="flex flex-col items-center gap-4 group">
            <SiYoutube className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-medium">YouTube</span>
          </a>
          <a href="#twitter" className="flex flex-col items-center gap-4 group">
            <FaXTwitter className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-medium">Twitter</span>
          </a>
          <a href="#github" className="flex flex-col items-center gap-4 group">
            <SiGithub className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-medium">GitHub</span>
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold mb-8">Services</h2>
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

      {/* Hire Me Section */}
      <section className="container mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold mb-8">Hire Me On</h2>
        <div className="grid grid-cols-2 gap-8">
          <a href="#upwork" className="flex flex-col items-center gap-4 group">
            <SiUpwork className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-medium">Upwork</span>
          </a>
          <a href="#fiverr" className="flex flex-col items-center gap-4 group">
            <SiFiverr className="w-16 h-16 text-muted-foreground group-hover:text-primary transition-colors" />
            <span className="font-medium">Fiverr</span>
          </a>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold mb-8">Client Testimonials</h2>
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

      {/* Newsletter Section */}
      <section className="container mx-auto px-4 mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Stay Updated</CardTitle>
          </CardHeader>
          <CardContent>
            <NewsletterForm />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
