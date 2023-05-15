import GraphLogoBlock from '@/components/GraphLogoBlock/GraphLogoBlock';
import { useTranslation } from 'react-i18next';

const Error = () => {
  const { t } = useTranslation();

  return (
    <div className={'bg-gradient-to-br from-[#7c22ce] via-60% via-[#3c1a98] to-[#00197c] w-full'}>
      <div
        className={
          'relative w-full h-full flex justify-around items-center z-10 pr-[3.7%] pl-[3.7%] pt-5 pb-5'
        }
      >
        <GraphLogoBlock>
          <>
            <p className="flex w-full justify-center mt-32">{t('404.oops')}</p>
            <p className="flex w-full justify-center mt-3">{t('404.not-found')}</p>
          </>
        </GraphLogoBlock>
      </div>
    </div>
  );
};

export default Error;
