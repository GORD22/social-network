import { Request, Response } from "express";

export type QueryRequest<ReqQuery> = Request<void, void, ReqQuery>;
export type BodyRequest<ReqBody> = Request<void, ReqBody, void>;

export type BodyResponse<ResBody> = Response<ResBody>;

export type TError = {
  code: number;
  message: string;
};