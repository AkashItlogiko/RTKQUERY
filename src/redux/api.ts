import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

const posts = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/',
  }),
  endpoints: (builder) => {
    builder.query
  }
});
