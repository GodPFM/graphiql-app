import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectLanguage, setAppLanguage } from '@/store/reducers/language/slice';
import { useEffect } from 'react';

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
  const dispatch = useAppDispatch();
  const { language } = useAppSelector(selectLanguage);
  const { i18n } = useTranslation();

  const handleLang = () => {
    dispatch(setAppLanguage(language === 'en' ? 'ru' : 'en'));
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  return <StyledSwitch defaultChecked onClick={handleLang} />;
}
