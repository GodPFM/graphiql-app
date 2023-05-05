import { Paper, Stack, Typography } from '@mui/material';
import React from 'react';

import { FormButton } from '../ui/FormButton/FormButton';
import Logo from '../ui/Logo/Logo';

import passwordIcon from '@/assets/images/password-icon.svg';
import mailIcon from '@/assets/images/mail-icon.svg';
import Image from 'next/image';
import TextFieldStyled from '../ui/StyledInput/StyledInput';

const Form = () => {
  return (
    <form>
      <Paper
        className="w-[25rem] min-h-[30rem] p-[1.2rem] bg-color-paper flex flex-col gap-[2rem] justify-center"
        elevation={3}
      >
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
          <Logo size="3rem" classes="fill-color-purple" />
          <Typography className="text-color-purple text-2xl">GraphiQL</Typography>
        </Stack>
        <Stack spacing={2}>
          <h2 className="font-semibold text-xl">Sign in</h2>
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

          <FormButton
            variant="contained"
            className="bg-color-purple font-semibold normal-case text-[16px] hover:bg-color-purple-hover"
          >
            Sign in
          </FormButton>
        </Stack>
      </Paper>
    </form>
  );
};

export default Form;
