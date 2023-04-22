import { AppProvider } from '@root/client';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { trpc } from '../utils/trpc';

function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}

export default trpc.withTRPC(App);
