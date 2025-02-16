import { getAllPosts, getPost } from '@/lib/markdown';
import { format, parseISO } from 'date-fns';
import Link from 'next/link';

type SearchParams = { [key: string]: string | string[] | undefined }

type Props = {
  params: { slug: string };
  searchParams: SearchParams;
}

export default async function BlogPage({ searchParams }: Props) {
  const posts = getAllPosts();
  const selectedPostFilename = (searchParams?.post as string) || posts[0].filename;
  const selectedPost = await getPost(selectedPostFilename);
  
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Blog</h1>
          <Link 
            href="/" 
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            ← Return to Home
          </Link>
        </div>
        
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">All Posts</h2>
              <ul className="space-y-3">
                {posts.map((post) => {
                  const date = parseISO(post.date);
                  return (
                    <li key={post.filename}>
                      <Link
                        href={`/blog?post=${post.filename}`}
                        className={`block p-2 rounded hover:bg-blue-50 transition-colors duration-200 ${
                          post.filename === selectedPostFilename ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600'
                        }`}
                      >
                        <div className="text-sm">{format(date, 'MMMM d, yyyy')}</div>
                        <div className="text-sm font-medium mt-1">
                          {post.filename.replace('.md', '')}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <article className="flex-1 prose prose-lg max-w-none">
            <div 
              dangerouslySetInnerHTML={{ __html: selectedPost.contentHtml }} 
              className="bg-white p-8 rounded-lg shadow-sm"
            />
          </article>
        </div>
      </div>
    </main>
  );
} 