import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";

const posts = [
  {
    title: "Latest LinkedIn Article",
    excerpt: "Discussing modern web development practices...",
    date: "2024-03-20",
    type: "article",
  },
  {
    title: "AI Research Paper",
    excerpt: "Exploring innovations in machine learning architectures...",
    date: "2024-03-15",
    type: "article",
  },
];

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Recent Content</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Card key={post.title}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <div className="text-sm text-muted-foreground">{post.date}</div>
            </CardHeader>
            <CardContent>
              <p>{post.excerpt}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">LinkedIn Articles</h2>
        <p>Check out my latest professional articles on LinkedIn</p>
      </div>

      {/* Contact Section */}
      <div className="mt-16">
        <Card>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}