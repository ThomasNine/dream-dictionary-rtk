import { apiServices } from "../apiServices";

const blogHeaderEndpoint = apiServices.injectEndpoints({
  endpoints: (builder) => ({
    getBlogHeader: builder.query({
      query: () => `/BlogHeader`,
      tagTypes: ["blogHeader"],
      providesTags: ["blogHeader"],
    }),
  }),
});
export const { useGetBlogHeaderQuery } = blogHeaderEndpoint;
