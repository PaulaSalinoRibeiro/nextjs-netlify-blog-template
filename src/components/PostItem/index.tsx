import Link from "next/link";

import { PostContent } from "../../lib/posts";

import styles from "./styles.module.css";

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a className={styles.link}>
        <span>{post.date}</span>
        <h2 className={styles.title}>{post.title}</h2>
        <p>{post.subtitle}</p>
      </a>
    </Link>
  );
}
