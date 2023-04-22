import type { inferAsyncReturnType } from '@trpc/server';
import type { NextApiRequest, NextApiResponse } from 'next';

export const createContext = ({
  req,
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) => ({ req, res });

export type Context = inferAsyncReturnType<typeof createContext>;
