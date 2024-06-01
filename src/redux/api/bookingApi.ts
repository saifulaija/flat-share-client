import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { IMeta } from "@/types";
// import { TAdmin } from "@/types/admin";




export const bookingApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
   

    // getAllAdmins: build.query({
    //   query: (arg: Record<string, any>) => ({
    //     url: "/admin",
    //     method: "GET",
    //     params: arg,
    //   }),
    //   transformResponse: (response: TAdmin[], meta: IMeta) => {
    //     return {
    //       admins: response,
    //       meta,
    //     };
    //   },
    //   providesTags: [tagTypes.admin],
    // }),

    deleteAdmin: build.mutation({
      query: (id) => ({
        url: `/admin/soft/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.admin],
    }),
    createBooking: build.mutation({
      query: (data) => ({
        url:'/booking/create-booking',
        method: "POST",
        data
      }),
      invalidatesTags: [tagTypes.booking],
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
    updateBooking: build.mutation({
      query: (data) => ({
        url: `/booking/booking-requests/${data.id}`,
        method: "PUT",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.booking,tagTypes.flat],
    }),
    getMyBooking: build.query({
      query: () => ({
        url: '/booking/my-bookings',
        method: "GET",
       
      }),
     providesTags:[tagTypes.booking]
    }),
  }),
});

export const {

//   useGetAllAdminsQuery,
  useDeleteAdminMutation,
useGetSingleAdminQuery,
useUpdateBookingMutation,
useCreateBookingMutation,
useGetMyBookingQuery

} =bookingApi;