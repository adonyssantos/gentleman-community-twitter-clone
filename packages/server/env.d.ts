declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    NEXT_PUBLIC_VERCEL_URL: string;
    LOCAL_URL: string;
  }
}
