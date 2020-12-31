import Link from "next/link";

import { SEO } from "@/src/components/SEO";
import { getSortedPosts, Post } from "@/utils/posts";
import { GetStaticProps } from "next";

type Props = {
  posts: Array<Post>
}

export default function Home({ posts }: Props): JSX.Element {
  return (
    <>
      <SEO title="All posts" />
      {posts.map(({ frontmatter: { title, description, date }, slug }) => (
        <article key={slug}>
          <header className="mb-2">
            <h3 className="mb-2">
              <Link href={"/blog/[slug]"} as={`/blog/${slug}`}>
                <a className="text-4xl font-bold text-yellow-600 font-display">
                  {title}
                </a>
              </Link>
            </h3>
            <span className="text-sm">{date}</span>
          </header>
          <section>
            <p className="mb-8 text-lg">{description}</p>
          </section>
        </article>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
