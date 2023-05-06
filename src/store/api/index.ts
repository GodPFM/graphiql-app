import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

interface PayloadParams {
  query: string;
  variables?: string;
}

const baseUrl = 'https://api.escuelajs.co/graphql';

export const graphQl = createApi({
  reducerPath: 'getData',
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (build) => ({
    getData: build.mutation<object, PayloadParams>({
      query: (body: PayloadParams) => ({
        url: '/',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      }),
    }),
  }),
});

export const useGetDataMutaion = graphQl.useGetDataMutation;

export const { getData } = graphQl.endpoints;
