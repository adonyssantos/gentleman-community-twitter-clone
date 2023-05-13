import { trpc } from '@root/client/trpc';
import Head from 'next/head';

export default function Home() {
  const { data } = trpc.hello.useQuery({ text: ' World' });
  return (
    <>
      <Head>
        <title>Create Chris App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>Hello from Next Web App!</main>
      <p>{data?.greeting}</p>
    </>
  );
}
