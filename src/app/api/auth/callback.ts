import { supabase } from '@/lib/supabase/client';
import type { NextApiRequest, NextApiResponse } from 'next';
 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { access_token } = req.query;

  if (typeof access_token === 'string') {
    const { error } = await supabase.auth.getSession();

    if (error) {
      console.error('Error retrieving session:', error.message);
      return res.status(401).json({ error: 'Unauthorized' });
    }

    res.redirect('/dashboard'); // Redirect to a protected page or dashboard
  } else {
    res.status(400).json({ error: 'Invalid request' });
  }
}
