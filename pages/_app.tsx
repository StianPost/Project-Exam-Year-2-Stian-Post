import '../styles/styles.scss';

import type { AppProps } from 'next/app';
import Globalstyles from '../styles/globals';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Globalstyles /> <Component {...pageProps} />{' '}
    </>
  );
}

export default MyApp;
