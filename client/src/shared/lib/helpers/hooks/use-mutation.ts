import { AxiosError } from "axios";
import { allSettled, createEffect, Effect, Scope } from "effector";
import { useState } from "react";

export const useMutation = <
  Req,
  Res,
  Err extends Error | AxiosError | null | void
>(
  effect: Effect<Req, Res, Err>,
  scope?: Scope
):[
  (params: Req) => Promise<Res | null>,
  { data: Res | null; loading: boolean; error: Err | null },
] => {
  const [data, setData] = useState<Res | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Err | null>(null);

  const mutation = async (params: Req) => {
    let result: Res | null = null;
    setLoading(true);

    const fx = createEffect(async (params: Req) => {
      return result = await effect(params)
        .then((pld) => {
          setData(pld);
          return pld;
        })
        .catch((err: Err) => {
          setError(err);
          return null;
        });
    });

    if (scope) {
      await allSettled(fx, { scope, params }).finally(() => setLoading(false));
    }
    
    return result
  };

  return [mutation, { data, loading, error }];
};
