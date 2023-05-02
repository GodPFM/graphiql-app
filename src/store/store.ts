import type { PreloadedState } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';
// @ts-ignore
const { combineReducers, configureStore } = ((toolkitRaw as never).default ??
  toolkitRaw) as typeof toolkitRaw;

const rootReducer = combineReducers({});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
