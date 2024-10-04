import { CODES } from "../codes";
import { TError } from "../types";

export const handleError = (err: unknown): TError => {
  if (
    typeof err === "object" &&
    err &&
    "code" in err &&
    typeof err.code === "number" &&
    "message" in err &&
    typeof err.message === "string"
  ) {
    return {
      code: err.code,
      message: err.message,
    };
  } else {
    return {
      code: CODES.INTERNAL_SERVER_ERROR,
      message: "Something wrong",
    };
  }
};
