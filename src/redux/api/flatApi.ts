import { IMeta } from "@/types";

import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { IFlat } from "@/types/flat";

const flatsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createFlat: build.mutation({
      query: (data) => ({
        url: "/flat/create-flat",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        data,
      }),
      invalidatesTags: [tagTypes.flat],
    }),

    getAllFlats: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/flat",
        method: "GET",
        params: arg,
      }),
      // transformResponse: (response: IFlat[], meta: IMeta) => {
      //   return {
      //     flats: response,
      //     meta,
      //   };
      // },
      providesTags: [tagTypes.flat],
    }),
    getMyFlats: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/flat/get-my-flats`,
        method: "GET",
        params: arg,
      }),
      // transformResponse: (response: IFlat[], meta: IMeta) => {
      //   return {
      //     flats: response,
      //     meta,
      //   };
      // },
      providesTags: [tagTypes.flat],
    }),
    getSingleFlat: build.query({
      query: (id) => ({
        url: `/flat/get-single-flat/${id}`,
        method: "GET",
      }),

      providesTags: [tagTypes.flat],
    }),
    getSingleFlatForModerator: build.query({
      query: (id) => ({
        url: `/flat/get-single-flat/${id}`,
        method: "GET",
      }),

      providesTags: [tagTypes.flat],
    }),

    deleteFlat: build.mutation({
      query: (id) => ({
        url: `/flat/soft-delete/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.flat],
    }),
    // getSingleDoctor: build.query({
    //   query: (id: string | string[] | undefined) => ({
    //     url: `/doctor/${id}`,
    //     method: "GET",
    //   }),
    //   providesTags: [tagTypes.doctor],
    // }),
    updateFlat: build.mutation({
      query: (data) => ({
        url: `/flat/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.flat],
    }),
    updateStatusApprove: build.mutation({
      query: (data) => ({
        url: `/flat/change-approval-status/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.flat],
    }),
  }),
});

export const {
  useCreateFlatMutation,
  useGetAllFlatsQuery,
  useGetMyFlatsQuery,
  useGetSingleFlatQuery,
  useDeleteFlatMutation,
  useUpdateFlatMutation,
  useGetSingleFlatForModeratorQuery,
  useUpdateStatusApproveMutation,
} = flatsApi;
