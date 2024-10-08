import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:9000",
        keepUnusedDataFor: 200,
    }),
    tagTypes: [],
    endpoints: (builder) => ({}),
});