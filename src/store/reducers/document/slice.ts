import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';

interface InitialState {
  link: string;
  firstLoad: boolean;
}

const initialState: InitialState = {
  link: 'https://api.escuelajs.co/graphql',
  firstLoad: true,
};

export const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    setNewLink: (state, action: PayloadAction<string>) => {
      state.link = action.payload;
    },
    setFirstLoad: (state) => {
      state.firstLoad = false;
    },
  },
});

export const selectDocument = (state: RootState) => state.document;

export const { setNewLink, setFirstLoad } = documentSlice.actions;

export default documentSlice.reducer;
