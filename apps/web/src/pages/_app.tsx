import { trpc } from '@root/client/src/trpc';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import '../styles/globals.css';

const AppProvider = dynamic(
  () => import('@root/client/providers/AppProvider').then((module) => module.AppProvider),
  {
    ssr: false,
  },
);

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default trpc.withTRPC(App);
