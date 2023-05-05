import { ReactNode, useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

type Props = {
  label: string;
  image: ReactNode;
  type?: string;
};
const StyledField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#383D5B',
    top: '0',
  },
  '& label': {
    color: '#383D5B',
    fontSize: '1rem',
    fontFamily: 'Source Sans Pro',
  },
  '& .MuiInputLabel-root:not(.MuiInputLabel-shrink)': {
    transform: 'translate(42px, 8px)',
  },
  '& .MuiOutlinedInput-input': {
    paddingLeft: '8px',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#CAD0D8',
    },
    '&:hover fieldset': {
      borderColor: '#B2B9C3',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#B2B9C3',
      borderWidth: '1px',
    },
  },
});

const TextFieldStyled = ({ label, image, type }: Props) => {
  const [shrink, setShrink] = useState(false);

  return (
    <StyledField
      onFocus={() => setShrink(true)}
      onBlur={(e) => {
        !e.target.value && setShrink(false);
      }}
      label={label}
      InputProps={{
        startAdornment: <InputAdornment position="start">{image}</InputAdornment>,
      }}
      InputLabelProps={{
        shrink: shrink,
      }}
      variant="outlined"
      className="bg-white font-SourceSansPro text-[1rem]"
      size="small"
      type={type || 'text'}
    />
  );
};
export default TextFieldStyled;
