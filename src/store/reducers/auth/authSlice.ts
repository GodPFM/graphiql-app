import { KindForm } from '@/types/enums';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Auth {
  id: string | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  kindOfForm: KindForm;
}

const initialState: Auth = {
  id: null,
  token: null,
  kindOfForm: KindForm.login,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.id = action.payload.id;
      state.token = action.payload.token;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },

    removeUser(state) {
      state.id = null;
      state.token = null;
    },
    changeKindOfForm(state, action) {
      state.kindOfForm = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
});

export const authActions = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
