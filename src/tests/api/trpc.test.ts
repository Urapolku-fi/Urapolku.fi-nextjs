import { appRouter } from '@/app/api/[trpc]/_server/index';
import { test, expect } from '@jest/globals';

test('can get hello ping', async () => {
  const caller = appRouter.createCaller({ session: null });

  const result = await caller.greeting();

  expect(result).toBe('Hello from TRPC!');
});
