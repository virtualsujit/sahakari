// pages/api/admin.ts
import { getUserRoles, getUserSession } from '@/lib/auth';
import type { NextApiRequest, NextApiResponse } from 'next';
 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getUserSession();
  if (!session) return res.status(401).json({ error: 'Unauthorized' });

  const roles = await getUserRoles(session.user.id);
  if (!roles.includes('admin')) return res.status(403).json({ error: 'Forbidden' });

  // Handle API logic here
  res.status(200).json({ message: 'Success' });
}
