import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

import { IMeta } from "@/types";
import { IUser } from "@/types/user";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSingleUser: build.query<IUser, void>({
      query: () => ({
        url: "/user/profile",
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
    getAllUser: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/user",
        method: "GET",
        params: arg,
      }),
      transformResponse: (response: IUser[], meta: IMeta) => {
        return {
          users: response,
          meta,
        };
      },
      providesTags: [tagTypes.user],
    }),
    updateUserStatus: build.mutation({
      query: (data) => ({
        url: `/user/${data.id}/status`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    updateUserProfile: build.mutation({
      query: (data) => ({
        url: `/user/update-profile`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user,tagTypes.userProfile],
    }),
  }),
});

export const { useGetSingleUserQuery,useGetAllUserQuery,useUpdateUserStatusMutation,useUpdateUserProfileMutation } = profileApi;