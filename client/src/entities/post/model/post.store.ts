import { createEvent, createStore } from "effector";
import { IPost } from "./post.types";
import { getPostsFx } from "./post.actions";

export const resetPosts = createEvent();

export const $posts = createStore<IPost[]>([])
  .on(getPostsFx.doneData, (_, pld) => pld)
  .reset(resetPosts);