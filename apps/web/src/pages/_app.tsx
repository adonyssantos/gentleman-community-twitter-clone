import { AppProvider } from '@root/client';
import { trpc } from '@root/client/src/trpc';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default trpc.withTRPC(App);
