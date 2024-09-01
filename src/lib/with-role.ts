import { getUserSession, getUserRoles } from './auth';
import type { GetServerSidePropsContext, GetServerSidePropsResult } from 'next';

export function withRole<P>(handler: (ctx: GetServerSidePropsContext) => Promise<GetServerSidePropsResult<P>>, requiredRole: string) {
  return async (ctx: GetServerSidePropsContext) => {
    const session = await getUserSession();
    if (!session) {
      return { redirect: { destination: '/login', permanent: false } };
    }

    const roles = await getUserRoles(session.user.id);
    if (!roles.includes(requiredRole)) {
      return { redirect: { destination: '/unauthorized', permanent: false } };
    }

    return handler(ctx);
  };
}
