import React from "react";
import { PostContent } from "../../lib/posts";
import PostItem from '../PostItem';


import styles from "./styles.module.css";

type Props = {
  posts: PostContent[];
};
export default function PostList({ posts }: Props) {
  return (
    <div className={styles.container} >
      <div className={styles.posts}>
        <ul className={styles.post}>
          {posts.map((it, i) => (
            <li key={i}>
              <PostItem post={it} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
