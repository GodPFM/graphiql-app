import '../styles/globals.css';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout/Layout';
import { setupStore } from '../store/store';
import { DevSupport } from '@react-buddy/ide-toolbox-next';
import { ComponentPreviews, useInitial } from '@/components/dev';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={setupStore()}>
      <Layout>
        <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
          <Component {...pageProps} />
        </DevSupport>
      </Layout>
    </Provider>
  );
}
