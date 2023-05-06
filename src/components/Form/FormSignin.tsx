import { Stack } from '@mui/material';
import TextFieldStyled from '../ui/StyledInput/StyledInput';
import Image from 'next/image';
import Button from '@mui/material/Button';
import passwordIcon from '@/assets/images/password-icon.svg';
import mailIcon from '@/assets/images/mail-icon.svg';
import Link from 'next/link';

const FormSignin = () => {
  return (
    <form>
      <Stack spacing={2}>
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-xl">Sign in</h2>
          <p className="text-xs">
            Already have an account?<Link href="/">Let&apos;s log in</Link>
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
        <TextFieldStyled
          label="Repeat password"
          type="password"
          image={<Image alt="" src={passwordIcon} className="w-[1rem]" />}
        />

        <Button
          variant="contained"
          className="bg-color-purple font-semibold normal-case text-[14px] w-full rounded-b h-[42px] border border-color-border-dark-purple mb-[19px] hover:bg-color-hover-button-purple"
        >
          Sign in
        </Button>
      </Stack>
    </form>
  );
};
export default FormSignin;
