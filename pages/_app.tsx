import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';

// Noto Font
// import { Noto_Serif_Display } from '@next/font/google';

// const noto = Noto_Serif_Display({
//   variable: '--font-noto',
// });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
