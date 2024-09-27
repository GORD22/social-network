import { createEffect } from "effector";
import { getPosts } from "../api/post.api";

export const getPostsFx = createEffect(async () => {
  const response = await getPosts();
  return response.data;
});
