'use client'
import { Avatar, List, Skeleton } from "antd";
import React from "react";
import Image from 'next/image'
import { IPost } from "../model/post.types";
import dynamic from "next/dynamic";
import { LikeOutlined, MessageOutlined } from '@ant-design/icons';

const DynamicIconText = dynamic(() => import('@/shared/ui/icon-text'))

interface IPostProps {
  item: IPost
  loading: boolean
};

export const Post = (props: IPostProps) => {
  const {item, loading} = props;

  return (
    <List.Item
      key={item.title}
      actions={
        !loading
          ? [
              <DynamicIconText
                icon={LikeOutlined}
                text={item.likeCount}
                key="list-vertical-like-o"
              />,
              <DynamicIconText
                icon={MessageOutlined}
                text={item.commentCount}
                key="list-vertical-message"
              />,
            ]
          : undefined
      }
      extra={
        !loading && (
          <Image
            width={272}
            height={168}
            alt="logo"
            src={item.image}
          />
        )
      }
    >
      <Skeleton loading={loading} active avatar>
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </Skeleton>
    </List.Item>
  );
};
