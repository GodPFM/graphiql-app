import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

interface PayloadParams {
  body: {
    query: string;
    variables?: string;
  };
  headers?: Record<string, string>;
}

const baseUrl = 'https://api.escuelajs.co/graphql';

export const graphQl = createApi({
  reducerPath: 'getData',
  tagTypes: ['Data'],
  baseQuery: fetchBaseQuery({
    baseUrl,
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  endpoints: (build) => ({
    getData: build.mutation({
      query: ({
        body,
        headers = {
          'Content-Type': 'application/json',
        },
      }: PayloadParams) => ({
        url: '/',
        method: 'POST',
        headers,
        body,
      }),
      invalidatesTags: [{ type: 'Data', id: 'LIST' }],
    }),
  }),
});

export const { useGetDataMutation } = graphQl;

export const { getData } = graphQl.endpoints;
