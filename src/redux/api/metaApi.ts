import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

export const metaApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getMeta: build.query({
      query: () => ({
        url: "/meta",
        method: "GET",
      }),
      providesTags: [tagTypes.flat,tagTypes.booking],
    }),
  }),
});

export const { useGetMetaQuery } = metaApi;