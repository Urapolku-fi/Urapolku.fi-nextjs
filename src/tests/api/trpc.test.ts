import { appRouter } from '@/app/api/[trpc]/_server/index';
import { test, expect } from '@jest/globals';
import { Session } from 'next-auth';

beforeAll(async () => {});

test('can create new eamployers', async () => {
  const caller = appRouter.createCaller({ session: null });

  const result = await caller.employer.create({ name: 'Urapolku' });

  expect(result.name).toEqual('Urapolku');
});

test('can get all employers', async () => {
  const caller = appRouter.createCaller({ session: null });

  const result = await caller.employer.getAll();

  expect(result.length).toBeGreaterThan(0);
});

test('can create employee', async () => {
  const mockSession: Session = {
    user: {
      name: 'test',
      email: 'test@example.com',
    },
    expires: '2025-01-01',
  };

  const caller = appRouter.createCaller({ session: mockSession });

  const result = await caller.employee.create({ name: 'Urapolku' });

  expect(result.name).toEqual('Urapolku');
});
