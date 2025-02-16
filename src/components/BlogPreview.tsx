import Link from 'next/link';
import { getAllPosts, getPost } from '@/lib/markdown';

export default async function BlogPreview() {
  const posts = getAllPosts();
  const latestPost = posts[0]; // Posts are already sorted by date
  const post = await getPost(latestPost.filename);
  
  // Get first 3 lines of content
  const previewLines = post.contentHtml
    .split('\n')
    .slice(0, 3)
    .join('\n');

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Latest from the Blog</h2>
          <h3 className="font-bold text-gray-800 mb-4">
            {latestPost.filename.replace('.md', '')}
          </h3>
          <div 
            className="prose prose-lg mb-6"
            dangerouslySetInnerHTML={{ __html: previewLines }}
          />
          <Link 
            href={`/blog?post=${latestPost.filename}`}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Read More →
          </Link>
        </div>
      </div>
    </section>
  );
} 