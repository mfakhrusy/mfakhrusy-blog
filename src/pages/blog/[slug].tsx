import Link from "next/link";
import { SEO } from "@/src/components/SEO";
import { Frontmatter, getPostBySlug, getPostsSlugs, Post } from "@/utils/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Spacer } from "@/src/components/Spacer";
import { MarkdownRenderer } from "@/src/modules/markdownRenderer";

type Props = {
  post: Partial<Post>;
  frontmatter: Frontmatter;
  nextPost: Post;
  previousPost: Post;
};

export default function BlogPage({
  post,
  frontmatter,
  nextPost,
  previousPost,
}: Props): JSX.Element {
  return (
    <>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />

      <Flex as="article" flexDirection="column">
        <Flex as="header" flexDirection="column">
          <Heading size="md" marginBottom="10px">
            {frontmatter.title}
          </Heading>
          <Text as="small">{frontmatter.date}</Text>
        </Flex>
        <Spacer height="20px" />
        <MarkdownRenderer content={post.content} />
      </Flex>

      <nav>
        {previousPost ? (
          <Link href={"/blog/[slug]"} as={`/blog/${previousPost.slug}`}>
            <a>← {previousPost.frontmatter.title}</a>
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
};

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const postData = getPostBySlug(slug as string);

  if (!postData.previousPost) {
    postData.previousPost = null;
  }

  if (!postData.nextPost) {
    postData.nextPost = null;
  }

  return { props: postData };
};
