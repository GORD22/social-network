import { Request, Response } from "express";

export type QueryRequest = Request<{}, {}, {}, string>;
export type BodyRequest<ReqBody> = Request<{}, {}, ReqBody>;

export type BodyResponse<ResBody> = Response<TResponse<ResBody> | TError>;

export type TResponse<T> = Record<string, T>;

export interface TError {
  code: number;
  message: string;
}
