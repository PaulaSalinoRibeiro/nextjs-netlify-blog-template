import { GetStaticProps } from "next";
import config from "../lib/config";

import PostList from '../components/PostList';
import Profile from "../components/Profile";

import style from "../../public/styles/Home.module.css";

import { listPostContent, PostContent } from "../lib/posts";

type Props = {
  posts: PostContent[];
};

export default function Home( { posts }: Props ) {
  return (
    <div className={style.container}>
      <Profile />
      <PostList posts={posts} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);

  return {
    props: {
      posts,
    },
  };
};
