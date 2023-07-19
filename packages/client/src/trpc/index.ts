import type { AppRouter } from '@root/server/src/routes/appTRPC.route';
import { createTRPCReact } from '@trpc/react-query';

export const trpc = createTRPCReact<AppRouter>();
