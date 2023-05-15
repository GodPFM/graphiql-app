import GraphLogoBlock from '@/components/GraphLogoBlock/GraphLogoBlock';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/store/hooks';
import { selectLanguage } from '@/store/reducers/language/slice';

const Error = () => {
  const { language } = useAppSelector(selectLanguage);
  const { t } = useTranslation();
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  useEffect(() => {
    setText1(t('404.oops') as string);
    setText2(t('404.not-found') as string);
  }, [language]);

  return (
    <div className={'bg-gradient-to-br from-[#7c22ce] via-60% via-[#3c1a98] to-[#00197c] w-full'}>
      <div
        className={
          'relative w-full h-full flex justify-around items-center z-10 pr-[3.7%] pl-[3.7%] pt-5 pb-5'
        }
      >
        <GraphLogoBlock>
          <>
            <p className="flex w-full justify-center mt-32">{text1}</p>
            <p className="flex w-full justify-center mt-3">{text2}</p>
          </>
        </GraphLogoBlock>
      </div>
    </div>
  );
};

export default Error;
