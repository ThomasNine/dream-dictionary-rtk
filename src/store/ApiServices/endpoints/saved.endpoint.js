import { apiServices } from "../apiServices";

const savedEndpoint = apiServices.injectEndpoints({
  endpoints: (builder) => ({
    getSaved: builder.query({
      query: () => `/saved`,
      tagTypes: ["Saved"],
      providesTags: ["Saved"],
    }),
    createSaved: builder.mutation({
      query: (data) => ({
        url: "/saved",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Saved"],
    }),
    deleteSaved: builder.mutation({
      query: (id) => ({
        url: `/saved/${id}`,
        method: "DELETE",
        body: id,
      }),
      invalidatesTags: ["Saved"],
    }),
  }),
});

export const {
  useGetSavedQuery,
  useCreateSavedMutation,
  useDeleteSavedMutation,
} = savedEndpoint;
