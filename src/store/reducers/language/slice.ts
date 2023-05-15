import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { RootState } from '@/store/store';

const initialState = { language: 'en' };

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setAppLanguage: (state, { payload }: PayloadAction<'ru' | 'en'>) => {
      state.language = payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase<typeof HYDRATE, PayloadAction<RootState, typeof HYDRATE>>(
      HYDRATE,
      (state, { payload }) => {
        state.language = payload.language.language;
        return state;
      }
    );
  },
});

export const { setAppLanguage } = languageSlice.actions;

export const selectLanguage = (state: RootState) => state.language;

export default languageSlice.reducer;
