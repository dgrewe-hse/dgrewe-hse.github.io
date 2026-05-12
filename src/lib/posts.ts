import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  preview: string;
  tags?: string[];
}

export interface Post extends PostMeta {
  html: string;
}

function slugFromFilename(filename: string) {
  return filename.replace(/\.md$/, "");
}

export function getAllPostMeta(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
      const { data } = matter(raw);
      return {
        slug: slugFromFilename(filename),
        title: data.title ?? "Untitled",
        date: data.date ?? "",
        preview: data.preview ?? "",
        tags: data.tags ?? [],
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  const filepath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(filepath)) return null;

  const raw = fs.readFileSync(filepath, "utf8");
  const { data, content } = matter(raw);

  // Dynamic import keeps `marked` out of the client bundle
  const { marked } = await import("marked");
  const html = await marked(content);

  return {
    slug,
    title: data.title ?? "Untitled",
    date: data.date ?? "",
    preview: data.preview ?? "",
    tags: data.tags ?? [],
    html,
  };
}

export function getAllSlugs(): string[] {
  return getAllPostMeta().map((p) => p.slug);
}
