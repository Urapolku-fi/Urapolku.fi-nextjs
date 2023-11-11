import { initTRPC } from '@trpc/server';
import { Context } from './context';

const trpc = initTRPC.context<Context>().create();
export const { router, procedure } = trpc;