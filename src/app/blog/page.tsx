import { getAllPosts, getPost } from '@/lib/markdown';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

interface BlogPost {
  filename: string;
  date: string;
  title: string;
  contentHtml: string;
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;
  const posts = getAllPosts();
  const selectedPostFilename = (resolvedParams?.post as string) || posts[0].filename;
  
  // Get all post titles
  const postsWithTitles: BlogPost[] = await Promise.all(
    posts.map(async (post) => {
      const fullPost = await getPost(post.filename);
      // Get first line as title
      const firstLine = fullPost.contentHtml
        .split('\n')[0]
        .replace(/<[^>]*>/g, ''); // Remove any HTML tags
      return {
        ...post,
        title: firstLine || post.filename.replace('.md', ''),
        contentHtml: fullPost.contentHtml
      };
    })
  );
  
  const selectedPost = await getPost(selectedPostFilename);
  
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
          <Link 
            href="/" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            ← Return to Home
          </Link>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - becomes horizontal scrolling on mobile */}
          <div className="w-full lg:w-64 lg:flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">All Posts</h2>
              <div className="overflow-x-auto lg:overflow-x-visible">
                <ul className="flex lg:flex-col gap-3 min-w-min">
                  {postsWithTitles.map((post) => {
                    const date = parseISO(post.date);
                    return (
                      <li key={post.filename} className="min-w-[250px] lg:min-w-0">
                        <Link
                          href={`/blog?post=${post.filename}`}
                          className={`block p-2 rounded hover:bg-blue-50 transition-colors duration-200 ${
                            post.filename === selectedPostFilename ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600'
                          }`}
                        >
                          <div className="text-sm text-gray-500">{format(date, 'MMMM d, yyyy')}</div>
                          <div className="text-sm font-medium mt-1">
                            {post.title}
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <article className="flex-1 prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: selectedPost.contentHtml }} 
              className="bg-white p-4 sm:p-8 rounded-lg shadow-sm"
            />
          </article>
        </div>
      </div>
    </main>
  );
} 