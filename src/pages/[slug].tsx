import { GetStaticPaths, GetStaticProps } from "next";
import { SEO } from "@/src/components/SEO";
import { PostView } from "@/src/modules/blog/components/PostView";
import { Frontmatter, getPostBySlug, getPostsSlugs, Post } from "@/utils/posts";

type Props = {
  post: Post;
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

      <PostView
        post={post}
        previousPost={previousPost}
        nextPost={nextPost}
        frontmatter={frontmatter}
      />
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
