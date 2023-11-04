import { procedure, router } from './trpc';

export const appRouter = router({
  greeting: procedure.query(() => 'Hello from TRPC!'),
});

export type AppRouter = typeof appRouter;
