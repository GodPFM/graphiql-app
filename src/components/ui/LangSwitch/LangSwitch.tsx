import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

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

  const handleLang = () => {
    i18n.changeLanguage(router.locale === 'en' ? 'ru' : 'en');
    router.push(router.pathname, router.asPath, { locale: router.locale === 'en' ? 'ru' : 'en' });
  };

  return <StyledSwitch checked={router.locale === 'en'} onClick={handleLang} />;
}
