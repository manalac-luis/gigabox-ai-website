import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPost(filename: string) {
  const fullPath = path.join(postsDirectory, filename);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Use gray-matter to parse the post metadata
  const { content, data } = matter(fileContents);
  
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(content);
    
  const contentHtml = processedContent.toString();
  
  return {
    filename,
    contentHtml,
    ...data
  };
}

export function getAllPosts() {
  const filenames = fs.readdirSync(postsDirectory);
  return filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => ({
      filename,
      date: filename.split('-').slice(0, 3).join('-').replace('.md', '')
    }))
    .sort((a, b) => (a.date > b.date ? -1 : 1));
} 