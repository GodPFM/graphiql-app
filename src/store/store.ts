import type { PreloadedState } from '@reduxjs/toolkit';
import * as toolkitRaw from '@reduxjs/toolkit';

import documentReducer from './reducers/document/slice';

type TypeToolkitRaw = typeof toolkitRaw & { default?: unknown };
const { combineReducers, configureStore } = ((toolkitRaw as TypeToolkitRaw).default ??
  toolkitRaw) as typeof toolkitRaw;

const rootReducer = combineReducers({
  document: documentReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
