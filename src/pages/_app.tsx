import '../styles/globals.css';

import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Layout from '@/components/Layout/Layout';
import { wrapper } from '@/store/store';
import { CssBaseline } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';

export function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Layout>
          <Component {...props.pageProps} />
        </Layout>
      </StyledEngineProvider>
    </Provider>
  );
}

export const getStaticProps = wrapper.getStaticProps((store) => async () => {
  const { language } = store.getState().language;
  return {
    props: {
      ...(await serverSideTranslations(language, ['common'], null, ['en', 'ru'])),
    },
  };
});

export default appWithTranslation(App);
