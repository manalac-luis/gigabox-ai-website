import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const researchDirectory = path.join(process.cwd(), 'research-papers');

export interface Paper {
  slug: string;
  title: string;
  date: string;
  abstract: string;
  contentHtml?: string;
}

export async function getPaper(slug: string): Promise<Paper> {
  const fullPath = path.join(researchDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { content, data } = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title,
    date: data.date,
    abstract: data.abstract,
    contentHtml,
  };
}

export function getAllPapers(): Paper[] {
  if (!fs.existsSync(researchDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(researchDirectory);
  return filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const slug = filename.replace(/\.md$/, '');
      const fullPath = path.join(researchDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        abstract: data.abstract,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getAllPaperSlugs(): string[] {
  if (!fs.existsSync(researchDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(researchDirectory);
  return filenames
    .filter(filename => filename.endsWith('.md'))
    .map(filename => filename.replace(/\.md$/, ''));
}
