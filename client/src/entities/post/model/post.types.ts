import { ReactNode } from "react";

export interface IPost {
  href: string;
  title: string;
  avatar: string;
  description?: string;
  content: ReactNode;
  commentCount?: number;
  likeCount?: number;
  image: string
}
