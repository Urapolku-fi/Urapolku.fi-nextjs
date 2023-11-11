import { mergeRouters } from '@trpc/server';
import { procedure, router } from './trpc';
import { EmployerRouter } from './routers/Employer';
import { EmployeeRouter } from './routers/Employee';

export const appRouter = router({
  employer: EmployerRouter,
  employee: EmployeeRouter,
})

export type AppRouter = typeof appRouter;
