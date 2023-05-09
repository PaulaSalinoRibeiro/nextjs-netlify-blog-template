import { PostContent } from "../../lib/posts";
import Date from "../Date";
import Link from "next/link";
import { parseISO } from "date-fns";

import styles from './styles.module.css';

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
  return (
    <Link href={`/posts/${post.slug}`}>
      <a className={styles.link}>
        <Date date={parseISO(post.date)} />
        <h2>{post.title}</h2>
      </a>
    </Link>
  );
}
