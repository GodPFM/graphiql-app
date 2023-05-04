import { Paper, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
// import Image from 'next/image';
// import logo from '@/assets/images/graphql-logo.svg';
import { FormButton } from '../ui/FormButton/FormButton';
import Logo from '../ui/Logo/Logo';

const Form = () => {
  return (
    <form>
      <Paper className="w-[25rem] h-[30rem] p-[1.2rem]" elevation={3}>
        <Stack>
          <Logo size="2rem" classes="fill-color-purple" /> <span>GraphiQL</span>
        </Stack>
        <Stack spacing={4}>
          <h2 className="font-semibold ">Sign in</h2>
          <TextField label="Email Address" variant="outlined" />
          <TextField label="Password" variant="outlined" />
          <TextField label="Repeat password" variant="outlined" />
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
