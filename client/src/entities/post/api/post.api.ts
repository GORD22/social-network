import { AxiosPromise } from "axios";
import { IPost } from "../model/post.types";
import { api } from "@/shared/api";

export const getPosts = (): AxiosPromise<IPost[]> => api.get("/posts");
