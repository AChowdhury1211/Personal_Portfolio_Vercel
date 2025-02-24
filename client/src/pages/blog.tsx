import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const posts = [
  {
    title: "Latest LinkedIn Article",
    excerpt: "Discussing modern web development practices...",
    date: "2024-03-20",
    type: "article",
  },
  {
    title: "Recent YouTube Video",
    excerpt: "Tutorial on building scalable applications...",
    date: "2024-03-18",
    type: "video",
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
        <h2 className="text-2xl font-bold mb-4">YouTube Embed</h2>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-lg"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
