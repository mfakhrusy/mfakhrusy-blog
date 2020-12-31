import Link from "next/link";
import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

import { SEO } from "@/src/components/SEO";
import { Frontmatter, getPostBySlug, getPostsSlugs, Post } from "@/utils/posts";
import { GetStaticPaths, GetStaticProps } from "next";

type Props = {
  post: Partial<Post>;
  frontmatter: Frontmatter;
  nextPost: Post;
  previousPost: Post;
};

export default function BlogPage({ post, frontmatter, nextPost, previousPost }: Props): JSX.Element {
  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />

      <article>
        <header>
          <h1>
            {frontmatter.title}
          </h1>
          <p>{frontmatter.date}</p>
        </header>
        <ReactMarkdown
          escapeHtml={false}
          source={post.content}
          renderers={{ code: CodeBlock }}
        />
      </article>

      <nav>
        {previousPost ? (
          <Link href={"/blog/[slug]"} as={`/blog/${previousPost.slug}`}>
            <a>
              ← {previousPost.frontmatter.title}
            </a>
          </Link>
        ) : (
          <div />
        )}
        {nextPost ? (
          <Link href={"/blog/[slug]"} as={`/blog/${nextPost.slug}`}>
            <a>{nextPost.frontmatter.title} →</a>
          </Link>
        ) : (
          <div />
        )}
      </nav>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const postData = getPostBySlug(slug as string);

  if (!postData.previousPost) {
    postData.previousPost = null;
  }

  if (!postData.nextPost) {
    postData.nextPost = null;
  }

  return { props: postData };
}

const CodeBlock = ({ language, value }) => {
  return (
    <SyntaxHighlighter style={style} language={language}>
      {value}
    </SyntaxHighlighter>
  );
};
