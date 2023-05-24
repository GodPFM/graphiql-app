import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

interface InitialState {
  link: string;
}

const initialState: InitialState = {
  link: 'https://api.escuelajs.co/graphql',
};

export const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    setNewLink: (state, action: PayloadAction<string>) => {
      state.link = action.payload;
    },
  },
});

export const selectDocument = (state: RootState) => state.document;

export const { setNewLink } = documentSlice.actions;

export default documentSlice.reducer;
