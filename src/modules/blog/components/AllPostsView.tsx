import { Post } from "@/utils/posts";
import { Flex } from "@chakra-ui/react";
import Link from "next/link";

type Props = {
  posts: Array<Post>;
};

export function AllPostsView({ posts }: Props) {
  return (
    <Flex flexDirection="column">
      {posts.map(
        ({ frontmatter: { title, description, date, thumbnail }, slug }) => (
          <article key={slug}>
            <header>
              <h3>
                <Link href={"/blog/[slug]"} as={`/blog/${slug}`}>
                  <a>{title}</a>
                </Link>
              </h3>
              <span>{date}</span>
            </header>
            <section>
              <p>{description}</p>
            </section>
            {thumbnail && (
              <section>
                <img
                  src={require(`../../../content/posts/${slug}/images/${thumbnail}`)}
                />
              </section>
            )}
          </article>
        )
      )}
    </Flex>
  );
}
