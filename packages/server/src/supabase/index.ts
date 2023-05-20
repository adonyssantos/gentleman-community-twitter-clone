import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';
import { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from 'next';

export const getSupabaseServerClient = (
  context: GetServerSidePropsContext | { req: NextApiRequest; res: NextApiResponse },
) => {
  return createServerSupabaseClient(context, {
    cookieOptions: {
      name: 'supabase-auth-token',
      domain: context.req.headers.host,
      maxAge: 8000,
      path: '/',
      sameSite: true,
      secure: process.env.NODE_ENV === 'production',
    },
  });
};

export const supabaseAdminClient = createClient(
  process.env.SUPABASE_PROJECT_URL ?? '',
  process.env.SUPABASE_SERVICE_ROLE_SECRET ?? '',
);
