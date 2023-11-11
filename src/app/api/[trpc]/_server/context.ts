import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { Session, getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/options';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface CreateContextOptions {
  session: Session | null;
}

export async function createContextInner(opts: CreateContextOptions) {

  return {session: opts.session};
}

export type Context = trpc.inferAsyncReturnType<typeof createContextInner>;

export async function createContext(opts: trpcNext.CreateNextContextOptions): Promise<Context> {
  const session = await getServerSession(authOptions);

  return await createContextInner({session: session});
}
