import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

const researchAreas = [
  {
    title: "VGGT: Visual Geometry Grounded Transformer",
    description: "VGGT is a feed-forward neural network that efficiently infers all key 3D scene attributes in under one second, outperforming specialized alternatives while achieving state-of-the-art results across multiple 3D computer vision tasks.",
    image: "/images/vggt.png",
    arxivLink: "https://arxiv.org/abs/2503.11651v1"
  },
  {
    title: "HART: EFFICIENT VISUAL GENERATION WITH HYBRID AUTOREGRESSIVE TRANSFORMER",
    description: "HART is a high-resolution autoregressive image generation model that combines discrete and continuous tokenization to significantly improve image quality and efficiency, outperforming diffusion models in both performance and computational cost.",
    image: "/images/hart.png",
    arxivLink: "https://arxiv.org/abs/2410.10812"
  },
  {
    title: "Cosmos-Transfer1: Conditional World Generation with Adaptive Multimodal Control",
    description: "Cosmos-Transfer1 is a real-time world generation model that uses adaptive spatial conditioning from multiple input modalities to enable precise simulation control for applications like Sim2Real in robotics and autonomous systems.",
    image: "/images/cosmos.png",
    arxivLink: "https://arxiv.org/abs/2503.14492"
  },
  {
    title: "Multimodal-Conditioned Latent Diffusion Models for Fashion Image Editing",
    description: "This paper presents a novel method for human-centric fashion image editing using multimodal prompts—such as text, poses, sketches, and textures—by extending latent diffusion models with modified denoising networks and enriched datasets, achieving realistic and coherent visual results.",
    image: "/images/edit.png",
    arxivLink: "https://arxiv.org/abs/2403.14828"
  }
];

const services = [
  {
    title: "S → Initial Consultation",
    description: "1-hour strategy call",
    price: "$70",
    features: [
      "Expert evaluation of your AI implementation needs",
      "High-level recommendations for your specific challenges",
      "Assessment of technical feasibility",
      "Written summary of key insights and next steps",
    ],
  },
  {
    title: "A → Foundation Package",
    description: "40 hours of dedicated research and unlimited email support",
    price: "$2,400/month",
    features: [
      "Expert evaluation of AI research papers and technologies",
      "Implementation recommendations for your specific use case",
      "Weekly progress reports and technical documentation",
      "Direct access to expert consultation via email",
    ],
  },
  {
    title: "B → Implementation Package",
    description: "Complete proof-of-concept development",
    price: "Starts at $10k",
    features: [
      "Complete proof-of-concept development based on cutting-edge research",
      "Custom model adaptation and fine-tuning for your business needs",
      "Comprehensive technical documentation and knowledge transfer",
      "Bi-weekly sync meetings and implementation roadmap",
      "3 months of post-implementation support",
    ],
  },
  {
    title: "C → Enterprise Solution",
    description: "End-to-end custom AI solution",
    price: "Starts at $30k",
    features: [
      "End-to-end custom AI solution from research to production",
      "Advanced model architecture design and optimization",
      "Full integration with existing systems and workflows",
      "Comprehensive AI mentorship for your technical team",
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

      {/* Trending Research Papers */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Trending Research Papers</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {researchAreas.map((area) => (
            <Card 
              key={area.title} 
              className="flex flex-col md:flex-row overflow-hidden cursor-pointer transition-all hover:shadow-lg"
              onClick={() => window.open(area.arxivLink, '_blank')}
            >
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
                <p className="text-muted-foreground mb-2">{area.description}</p>
                <p className="text-sm text-primary underline">View on arXiv</p>
              </div>
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

      {/* Services Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">What I Offer</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <p className="text-2xl font-bold mb-4 text-primary dark:text-primary-foreground">{service.price}</p>
                
                {service.features && (
                  <div className="text-left">
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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
              backgroundImage: "url('/images/bg-image1.svg')", 
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
