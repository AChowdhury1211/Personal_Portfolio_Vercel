import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Developed a proof-of-concept for real-time data analytics using advanced AI algorithms.",
    image: "project1.jpg",
    video: "https://www.youtube.com/embed/your-video-id",
  },
  {
    title: "Machine Learning Pipeline",
    description: "Built an end-to-end ML pipeline for automated data processing and model training.",
    image: "project2.jpg",
    video: "https://www.youtube.com/embed/your-video-id",
  },
  // Add more projects here
];

const services = [
  {
    title: "POC Development",
    description: "Rapid development of proof-of-concept solutions to validate AI implementation ideas.",
    features: [
      "Feasibility assessment",
      "Rapid prototyping",
      "Technical documentation",
      "Implementation roadmap",
    ],
  },
  {
    title: "AI Research Implementation",
    description: "Transform academic AI research into practical business solutions.",
    features: [
      "Research analysis",
      "Practical adaptation",
      "Performance optimization",
      "Scalability planning",
    ],
  },
  {
    title: "Custom AI Solutions",
    description: "Development of tailored AI solutions for specific business needs.",
    features: [
      "Requirements analysis",
      "Custom model development",
      "Integration support",
      "Performance monitoring",
    ],
  },
];

export default function Services() {
  const [_, setLocation] = useLocation();

  const handleContactClick = () => {
    setLocation("/#contact");
  };

  return (
    <div className="flex flex-col gap-16 py-16">
      {/* Header Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">AI Research & POC Development Services</h1>
          <p className="text-xl text-muted-foreground">
            Transforming cutting-edge AI research into practical, scalable solutions for your business
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">What I Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.title}>
              <CardContent className="pt-6">
                <div className="aspect-video mb-4 bg-muted rounded-lg overflow-hidden">
                  <iframe
                    className="w-full h-full"
                    src={project.video}
                    title={project.title}
                    allowFullScreen
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4">
        <Card className="bg-primary/5">
          <CardContent className="py-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Let's discuss how we can transform your ideas into reality
              </p>
              <Button size="lg" onClick={handleContactClick}>
                Contact Me
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
