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
          <header>
            <h3>
              <Link href={"/blog/[slug]"} as={`/blog/${slug}`}>
                <a>
                  {title}
                </a>
              </Link>
            </h3>
            <span>{date}</span>
          </header>
          <section>
            <p>{description}</p>
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
