import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const researchAreas = [
  {
    title: "Multimodal Large Language Models",
    description: "Research on models that can understand and generate content across text, images, audio, and video for more natural human-computer interactions.",
    image: "/images/research-multimodal.svg"
  },
  {
    title: "Reinforcement Learning from Human Feedback",
    description: "Advanced techniques to improve AI alignment with human preferences and values through interactive feedback mechanisms.",
    image: "/images/research-rlhf.svg"
  },
  {
    title: "Efficient AI Deployment",
    description: "Methods for optimizing model serving, reducing computational requirements, and enabling edge deployment of complex AI models.",
    image: "/images/research-efficiency.svg"
  },
  {
    title: "AI for Scientific Discovery",
    description: "Using AI systems to accelerate discoveries in drug development, materials science, and fundamental physics.",
    image: "/images/research-science.svg"
  }
];

const services = [
  {
    title: "Initial Consultation",
    price: "$500",
    description: "A 1-hour strategy call to evaluate your AI implementation needs and provide expert recommendations.",
    features: [
      "Expert evaluation of your AI implementation needs",
      "High-level recommendations for your specific challenges",
      "Assessment of technical feasibility",
      "Written summary of key insights and next steps",
    ],
  },
  {
    title: "Foundation Package",
    price: "$9,500 per month",
    description: "20 hours of dedicated research and unlimited email support to help you build a solid AI strategy.",
    features: [
      "Expert evaluation of AI research papers and technologies",
      "Implementation recommendations for your specific use case",
      "Weekly progress reports and technical documentation",
      "Direct access to expert consultation via email",
    ],
  },
  {
    title: "Implementation Package",
    price: "Starts at $45k for the entire engagement",
    description: "Complete proof-of-concept development based on cutting-edge research with custom model adaptation.",
    features: [
      "Complete proof-of-concept development based on cutting-edge research",
      "Custom model adaptation and fine-tuning for your business needs",
      "Comprehensive technical documentation and knowledge transfer",
      "Bi-weekly sync meetings and implementation roadmap",
      "3 months of post-implementation support",
    ],
  },
  {
    title: "Enterprise Solution",
    price: "Starts at $110k for the entire engagement",
    description: "End-to-end custom AI solution from research to production with full integration and ongoing support.",
    features: [
      "End-to-end custom AI solution from research to production",
      "Advanced model architecture design and optimization",
      "Full integration with existing systems and workflows",
      "Comprehensive training for your technical team",
      "6 months of ongoing optimization and support",
      "Scalability planning and future technology roadmap",
    ],
  },
];

export default function Services() {
  const [_, setLocation] = useLocation();

  const handleContactClick = () => {
    // Set a flag in sessionStorage to scroll to contact section after redirection
    sessionStorage.setItem('scrollToContact', 'true');
    // Navigate to home page
    setLocation("/");
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

      {/* Trending Research Areas */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Trending Research Areas</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {researchAreas.map((area) => (
            <Card key={area.title} className="flex flex-col md:flex-row overflow-hidden">
              <div className="w-full md:w-1/3 flex items-center justify-center p-6 bg-primary/5">
                <img 
                  src={area.image} 
                  alt={area.title} 
                  className="w-24 h-24"
                  onError={(e) => {
                    e.currentTarget.src = '/images/placeholder-gif.svg';
                  }}
                />
              </div>
              <div className="w-full md:w-2/3 p-6">
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">What I Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <div className="mt-2 text-xl font-bold text-primary">{service.price}</div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <h4 className="font-medium mb-2">What I Offer</h4>
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
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <Card key={num}>
              <CardContent className="pt-6">
                <div className="aspect-video mb-4 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src={`/images/project-gif-${num}.gif`} 
                    alt={`Project ${num}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/images/placeholder-gif.svg';
                    }}
                  />
                </div>
                <p className="text-center">Project {num} Demo</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="container mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden">
          {/* Background image container */}
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ 
              backgroundImage: "url('/images/bg-image1.jpg')", 
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          ></div>
          
          {/* Content */}
          <div className="relative z-20 py-16 px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4 text-white">Ready to Start Your AI Journey?</h2>
              <p className="text-xl text-gray-200 mb-8">
                Let's discuss how we can transform your ideas into reality
              </p>
              <Button size="lg" onClick={handleContactClick} className="text-lg px-8 py-6">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
