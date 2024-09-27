export interface IPost {
  href: string;
  title: string;
  avatar: string;
  description: string;
  content: HTMLElement | string | number;
  commentCount: number;
  likeCount: number;
  image: string
}
