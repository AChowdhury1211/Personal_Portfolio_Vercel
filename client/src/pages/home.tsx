import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { NewsletterForm } from "@/components/newsletter-form";
import { ContactForm } from "@/components/contact-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const services = [
  {
    title: "Basic Consultation",
    description: "One-hour strategy session with basic recommendations",
    price: "$100",
  },
  {
    title: "Professional Package",
    description: "Comprehensive analysis and implementation plan",
    price: "$500",
  },
  {
    title: "Enterprise Solution",
    description: "Full-scale business transformation strategy",
    price: "$2000",
  },
];

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CTO at TechCorp",
    content: "An exceptional developer who delivered beyond our expectations. The solution provided was both elegant and scalable.",
    avatar: "AJ"
  },
  {
    name: "Sarah Williams",
    role: "Startup Founder",
    content: "Working with them was a game-changer for our startup. Their technical expertise and attention to detail are remarkable.",
    avatar: "SW"
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    content: "Excellent communication and project delivery. Would definitely recommend for any complex technical projects.",
    avatar: "MC"
  }
];

export default function Home() {
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
            <p className="text-xl text-gray-200">
              Web Developer & Digital Consultant
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            A passionate developer with expertise in modern web technologies.
            Focused on creating scalable and user-friendly applications.
          </p>
        </div>
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

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4">
        <Card>
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