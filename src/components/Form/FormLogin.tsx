import { Stack } from '@mui/material';
import TextFieldStyled from '../ui/StyledInput/StyledInput';
import Image from 'next/image';
import Button from '@mui/material/Button';
import passwordIcon from '@/assets/images/password-icon.svg';
import mailIcon from '@/assets/images/mail-icon.svg';

const FormLogin = () => {
  return (
    <form>
      <Stack spacing={2}>
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl">Log in</h2>
          <p>
            New user?<a>Let&apos;s sign in</a>
          </p>
        </div>

        <TextFieldStyled
          label="Email Address"
          image={<Image alt="" src={mailIcon} className="w-[1.2rem]" />}
        />
        <TextFieldStyled
          label="Password"
          type="password"
          image={<Image alt="" src={passwordIcon} className="w-[1rem]" />}
        />

        <Button
          variant="contained"
          className="bg-color-purple font-semibold normal-case text-[14px] w-full rounded-b h-[42px] border border-color-border-dark-purple mb-[19px] hover:bg-color-hover-button-purple"
        >
          Log in
        </Button>
      </Stack>
    </form>
  );
};
export default FormLogin;
