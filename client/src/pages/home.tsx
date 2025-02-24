import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsletterForm } from "@/components/newsletter-form";
import { ContactForm } from "@/components/contact-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";

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
    content: "Exceptional AI expertise and delivered a robust POC that exceeded our expectations.",
    avatar: "AJ"
  },
  {
    name: "Sarah Williams",
    role: "Startup Founder",
    content: "Their AI research background brought invaluable insights to our project.",
    avatar: "SW"
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    content: "Delivered an innovative AI solution that transformed our business processes.",
    avatar: "MC"
  }
];

export default function Home() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section
        className="relative h-[500px] flex items-center"
        style={{
          backgroundImage: "url(your-banner-image.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">Your Name</h1>
            <p className="text-xl text-gray-200 mb-6">
              AI Research Engineer | POC Development Specialist
            </p>
            <div className="flex gap-4">
              <Button variant="outline" onClick={scrollToContact}>Contact Me</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Connect With Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <a href="#linkedin" className="text-muted-foreground hover:text-primary">LinkedIn</a>
                <a href="#youtube" className="text-muted-foreground hover:text-primary">YouTube</a>
                <a href="#twitter" className="text-muted-foreground hover:text-primary">Twitter</a>
                <a href="#github" className="text-muted-foreground hover:text-primary">GitHub</a>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Hire Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <a href="#upwork" className="text-muted-foreground hover:text-primary">Upwork</a>
                <a href="#fiverr" className="text-muted-foreground hover:text-primary">Fiverr</a>
                <Button variant="link" onClick={scrollToContact}>Contact Me</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            As an AI Research Engineer, I specialize in developing proof-of-concept solutions 
            that demonstrate the practical applications of cutting-edge AI technologies. 
            My expertise lies in translating complex AI research into scalable, 
            business-ready solutions.
          </p>
        </div>
      </section>

      {/* Code & Contributions Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Code & Contributions</h2>
        <Card>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Open Source Projects</h3>
                <p className="text-muted-foreground">
                  Check out my contributions and open source projects on GitHub.
                  I actively participate in the developer community and share my knowledge.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
                <p className="text-muted-foreground">
                  Expertise in modern web technologies, cloud architecture, and scalable solutions.
                  View my repositories to see my coding style and project architecture.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <p className="text-2xl font-bold">{service.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Client Testimonials</h2>
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
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Hire Me Section */}
      <section className="container mx-auto px-4 bg-primary/5 py-12 rounded-lg">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground">
            Let's develop innovative AI solutions that drive your business forward
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
      <section className="container mx-auto px-4">
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