import GraphLogoBlock from '@/components/GraphLogoBlock/GraphLogoBlock';
import React from 'react';
import FormAuth from '@/components/Form/FormAuth';
import { wrapper } from '@/store/store';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Auth = () => (
  <div className={'bg-gradient-to-br from-[#7c22ce] via-60% via-[#3c1a98] to-[#00197c] w-full'}>
    <div
      className={
        'relative w-full h-full flex justify-around items-center z-10 pr-[3.7%] pl-[3.7%] pt-5 pb-5'
      }
    >
      <GraphLogoBlock>
        <FormAuth />
      </GraphLogoBlock>
    </div>
  </div>
);

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const { language } = store.getState().language;

  return {
    props: {
      ...(await serverSideTranslations(language, ['common'], null, ['en', 'ru'])),
    },
  };
});

export default Auth;
