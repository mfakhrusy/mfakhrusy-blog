import matter from "gray-matter";
import fs from "fs";

export type Frontmatter = {
  date?: string;
  title?: string;
  description?: string;
  thumbnail?: string;
  excerpt?: string;
};

type PostFolder = {
  directory: string;
  filename: string;
};

export type Post = {
  slug: string;
  frontmatter: Frontmatter;
  excerpt: string;
  content: string;
};

type PostSlug = {
  params: {
    slug: string;
  };
};

type PostInfo = {
  post: Partial<Post>;
  previousPost: Post;
  nextPost: Post;
  frontmatter: Frontmatter;
};

export function getPostsFolders(): Array<PostFolder> {
  // Get all posts folders located in `content/posts`
  const postsFolders = fs
    .readdirSync(`${process.cwd()}/content/posts`)
    .map((folderName) => ({
      directory: folderName,
      filename: `${folderName}.md`,
    }));

  return postsFolders;
}

// Get day in format: Month day, Year. e.g. April 19, 2020
function getFormattedDate(date: Date) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return formattedDate;
}

export function getSortedPosts(): Array<Post> {
  const postFolders = getPostsFolders();

  const posts = postFolders
    .map(({ filename, directory }) => {
      // Get raw content from file
      const markdownWithMetadata = fs
        .readFileSync(`content/posts/${directory}/${filename}`)
        .toString();

      // Parse markdown, get frontmatter data, excerpt and content.
      const { data, excerpt, content } = matter(markdownWithMetadata);

      // console.log(data.thumbnail)

      const frontmatter = {
        ...data,
        date: getFormattedDate(data.date),
      };

      // Remove .md file extension from post name
      const slug = filename.replace(".md", "");

      return {
        slug,
        frontmatter,
        excerpt,
        content,
      };
    })
    .sort(
      (a, b) =>
        (new Date(b.frontmatter.date) as any) -
        (new Date(a.frontmatter.date) as any)
    );

  return posts;
}

export function getPostsSlugs(): Array<PostSlug> {
  const postFolders = getPostsFolders();

  const paths = postFolders.map(({ filename }) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return paths;
}

export function getPostBySlug(slug: string): PostInfo {
  const posts = getSortedPosts();

  const postIndex = posts.findIndex(({ slug: postSlug }) => postSlug === slug);

  const { frontmatter, content, excerpt } = posts[postIndex];

  const previousPost = posts[postIndex + 1];
  const nextPost = posts[postIndex - 1];

  return { frontmatter, post: { content, excerpt }, previousPost, nextPost };
}
