import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import type { GetServerSidePropsContext } from 'next/types';
import { prisma } from '../prisma';
import { getSupabaseServerClient } from '../supabase';

const languageRegex = /(.?)(?:[;|,](?:q=.?[,|;])?)/;

export const appContainer = (
  requestContext: CreateNextContextOptions | GetServerSidePropsContext,
) => {
  let language = 'en';
  const supabase = getSupabaseServerClient(requestContext);
  const headerLang = requestContext.req.headers['accept-language'] || language;

  const matchLanguage = headerLang.match(languageRegex);

  if (matchLanguage && matchLanguage.length > 0) {
    if (matchLanguage[0]!.includes('es')) {
      language = 'es';
    }
  }

  return {
    prisma,
    supabase,
    language,
    host: requestContext?.req?.headers.host ?? 'localhost:3000',
    protocol: requestContext?.req?.headers?.referer?.split('://')[0] ?? 'https',
  };
};
