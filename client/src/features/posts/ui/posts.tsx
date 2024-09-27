"use client";
import { getPostsFx } from "@/entities/post/model/post.actions";
import { $posts } from "@/entities/post/model/post.store";
import { Post } from "@/entities/post/ui/post";
import { List } from "antd";
import { useUnit } from "effector-react";
import { useEffect } from "react";

export const Posts = () => {
  const { getPosts, posts } = useUnit({ getPosts: getPostsFx, posts: $posts });

  useEffect(() => {
    const responsePosts = async () => {
      await getPosts();
    };
    responsePosts();
  }, []);

  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={posts}
      renderItem={(item) => <Post item={item} loading={false} />}
    />
  );
};
