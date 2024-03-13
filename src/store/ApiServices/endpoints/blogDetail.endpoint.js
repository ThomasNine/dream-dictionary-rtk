import { apiServices } from "../apiServices";

const blogDetailEndpoint = apiServices.injectEndpoints({
  endpoints: (builder) => ({
    getBlogDetail: builder.query({
      query: () => `/BlogDetail`,
      tagTypes: ["blogDetail"],
      providesTags: ["blogDetail"],
    }),
  }),
});

export const { useGetBlogDetailQuery } = blogDetailEndpoint;
