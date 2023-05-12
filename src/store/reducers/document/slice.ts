import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/store/store';
import { HYDRATE } from 'next-redux-wrapper';
import { Schema } from '@/types/schema-types';

interface ActionHydrate {
  payload: RootState;
  type: string;
}

type Data = {
  data: Schema;
};

interface Fields {
  name: string;
  args: Args;
  type: OfType;
}

interface Args {
  name: string;
  defaultValue: null;
}

interface OfType {
  ofType: OfType;
  name: null | string;
  kind: string;
}

interface InitialState {
  nav: string[];
  schema: Data | null;
  isRoot: boolean;
  fields: Fields[];
  args: Args[];
}

const initialState: InitialState = {
  nav: ['root'],
  isRoot: true,
  schema: null,
  fields: [],
  args: [],
};

export const documentSlice = createSlice({
  name: 'document',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.nav.push(action.payload);
    },
    addSchema: (state, action: PayloadAction<Data>) => {
      state.schema = action.payload;
    },
    setRoot: (state, action: PayloadAction<boolean>) => {
      state.isRoot = action.payload;
    },
    resetRoot: (state) => {
      state.nav = ['root'];
    },
    setFields: (state, action: PayloadAction<Fields[]>) => {
      state.fields = action.payload;
    },
    setArgs: (state, action: PayloadAction<Args[]>) => {
      state.args = action.payload;
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

export const { addItem, addSchema, setRoot, setFields, setArgs, resetRoot } = documentSlice.actions;

export default documentSlice.reducer;
