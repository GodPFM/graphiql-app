import { Paper, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import FormControl from '@mui/material/FormControl';
import { FormButton } from '../ui/FormButton/FormButton';
import Logo from '../ui/Logo/Logo';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';

const Form = () => {
  return (
    <form>
      <Paper className="w-[25rem]  p-[1.2rem] bg-color-paper" elevation={3}>
        <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
          <Logo size="3rem" classes="fill-color-purple" />{' '}
          <Typography className="text-color-purple text-2xl">GraphiQL</Typography>
        </Stack>
        <Stack spacing={4}>
          <h2 className="font-semibold ">Sign in</h2>
          <TextField
            label="Email Address"
            variant="outlined"
            className="border:color-border focus:border:color-purple "
          />
          <FormControl variant="outlined">
            <InputLabel htmlFor="email" className="focused:text-color-purple">
              Email Address
            </InputLabel>
            <OutlinedInput
              id="email"
              className="active:border:color-purple"
              label="Email Address"
            />
          </FormControl>

          <TextField label="Password" variant="outlined" />
          <TextField label="Repeat password" variant="outlined" helperText="Incorrect entry." />
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
