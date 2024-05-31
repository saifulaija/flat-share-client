import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { IMeta } from "@/types";
import {  TUserData } from "@/types/user";
// import { TAdmin } from "@/types/admin";




export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
   

    // getAllUsers: build.query({
    //   query: (arg: Record<string, any>) => ({
    //     url: "/user",
    //     method: "GET",
    //     params: arg,
    //   }),
    //   transformResponse: (response: TUserData[], meta: IMeta) => {
    //     return {
    //       users: response,
    //       meta,
    //     };
    //   },
    //   providesTags: [tagTypes.user],
    // }),



    getAllUsers: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/user",
        method: "GET",
        params: arg,
      }),
      // transformResponse: (response: TUserData[], meta: IMeta) => {
      //   return {
      //     users: response,
      //     meta,
      //   };
      // },
      providesTags: [tagTypes.user],
    }),


    createUser: build.mutation({
      query: (data) => ({
        url:'/user/register',
        method: "POST",
        data
      }),
      invalidatesTags: [tagTypes.user],
    }),
    //get single Admin
    getSingleAdmin: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/admin/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),
    // update a Admin
    updateUser: build.mutation({
      query: (data) => ({
        url: `/user/update-user/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.user,tagTypes.userProfile],
    }),
    getMyProfile: build.query({
      query: () => ({
        url: '/user/profile',
        method: "GET",
       
      }),
     providesTags:[tagTypes.user]
    }),
  }),
});

export const {

//   useGetAllAdminsQuery,

useGetSingleAdminQuery,
  useUpdateUserMutation,
  useCreateUserMutation,
  useGetMyProfileQuery,
  useGetAllUsersQuery
} =userApi;