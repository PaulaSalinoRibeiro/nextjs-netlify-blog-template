import { GetStaticProps } from "next";
import config from "../lib/config";

import PostList from '../components/PostList';
import Profile from "../components/Profile";

import { listPostContent, PostContent } from "../lib/posts";
import DivisionLine from '../components/DivisionLine';

type Props = {
  posts: PostContent[];
};

export default function Home( { posts }: Props ) {
  return (
    <div className="container">
      <Profile path="/images/profile.png"/>
      <DivisionLine />
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
