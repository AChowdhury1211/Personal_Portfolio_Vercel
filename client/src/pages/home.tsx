import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { NewsletterForm } from "@/components/newsletter-form";

const services = [
  {
    title: "Basic Consultation",
    description: "One-hour strategy session with basic recommendations",
    image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd",
    price: "$100",
  },
  {
    title: "Professional Package",
    description: "Comprehensive analysis and implementation plan",
    image: "https://images.unsplash.com/photo-1649105703438-0992d6844823",
    price: "$500",
  },
  {
    title: "Enterprise Solution",
    description: "Full-scale business transformation strategy",
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
    price: "$2000",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section
        className="relative h-[500px] flex items-center"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1507679799987-c73779587ccf)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">Professional Portfolio</h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Transforming ideas into exceptional digital experiences
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="prose dark:prose-invert">
            <p>
              A passionate developer with expertise in modern web technologies.
              Focused on creating scalable and user-friendly applications.
            </p>
          </div>
          <div>
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <p className="text-2xl font-bold">{service.price}</p>
                <Button className="mt-4">Get Started</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="container mx-auto px-4">
        <Card>
          <CardHeader>
            <CardTitle>Subscribe to Newsletter</CardTitle>
          </CardHeader>
          <CardContent>
            <NewsletterForm />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
