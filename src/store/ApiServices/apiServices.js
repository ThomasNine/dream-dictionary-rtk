import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiServices = createApi({
  reducerPath: "apiServices",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000` }),
  endpoints: (builder) => ({}),
});
