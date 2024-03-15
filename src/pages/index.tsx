import { GetStaticProps } from "next";
import config from "../lib/config";

import PostList from '../components/PostList';
import Profile from "../components/Profile";

import { listPostContent, PostContent } from "../lib/posts";
import DivisionLine from '../components/DivisionLine';

type Props = {
  posts: PostContent[];
};


function parseDateFromString(dateString) {
    const monthMap = {
        "Janeiro": 0,
        "Fevereiro": 1,
        "Março": 2,
        "Abril": 3,
        "Maio": 4,
        "Junho": 5,
        "Julho": 6,
        "Agosto": 7,
        "Setembro": 8,
        "Outubro": 9,
        "Novembro": 10,
        "Dezembro": 11
    };

    const parts = dateString.split(' ');

    const day = parseInt(parts[0]);
    const month = monthMap[parts[2]];
    const year = parseInt(parts[4]);

    const date = new Date(year, month, day);

    return date;
}

export default function Home( { posts }: Props ) {
  // @ts-ignore
  posts.sort((a, b) => parseDateFromString(b.date) - parseDateFromString(a.date))
  
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
