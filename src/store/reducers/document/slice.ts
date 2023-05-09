import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { HYDRATE } from 'next-redux-wrapper';

interface InitialState {
  nav: string[];
  schema: object;
}

interface ActionHydrate {
  payload: RootState;
  type: string;
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
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action) => {
      console.log('HYDRATE', (action as ActionHydrate).payload);

      if ((action as ActionHydrate).payload.document.nav) {
        state.nav = (action as ActionHydrate).payload.document.nav;
      }

      if ((action as ActionHydrate).payload.document.schema) {
        state.schema = (action as ActionHydrate).payload.document.schema;
      }

      return state;
    });
  },
});

export const selectDocument = (state: RootState) => state.document;

export const { addItem, addSchema } = documentSlice.actions;

export default documentSlice.reducer;
