import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { HYDRATE } from 'next-redux-wrapper';

interface InitialState {
  nav: string[];
  schema: object;
}
const initialState: InitialState = {
  nav: ['Root', 'Query'],
  schema: {},
};

export const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.nav.push(action.payload);
    },
    addSchema: (state, action: PayloadAction<object>) => {
      state.schema = action.payload;
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', action.payload);

      if (action.payload.document.nav) {
        state.nav = action.payload.document.nav;
      }

      if (action.payload.document.schema) {
        state.schema = action.payload.document.schema;
      }

      return state;
    },
  },
});

export const selectDocument = (state: RootState) => state.document;

export const { addItem, addSchema } = documentSlice.actions;

export default documentSlice.reducer;
