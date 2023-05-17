import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const StyledSwitch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-switchBase': {
    padding: 10,
    '&.Mui-checked': {
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#566992',
      },
      '& + .MuiSwitch-thumb': {
        backgroundColor: '#1B2240',
      },
    },
    '&:hover': {
      '& + .MuiSwitch-track': {
        opacity: 0.6,
        backgroundColor: '#fff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 18,
    height: 18,
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    borderRadius: 22 / 2,
    backgroundColor: '#566992',
  },
}));

export default function LangSwitch() {
  const router = useRouter();
  const { i18n } = useTranslation();
  const [locale, setLocale] = useState(() => router.locale);

  const handleLang = () => {
    setLocale(locale === 'en' ? 'ru' : 'en');
    i18n.changeLanguage(locale);
  };

  useEffect(() => {
    router.push(router.pathname, router.asPath, { locale: locale });
  }, [locale]);

  return <StyledSwitch checked={locale === 'en'} onClick={handleLang} />;
}
