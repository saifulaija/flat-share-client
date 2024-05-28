'use client'

import { useGetAllUsersQuery } from '@/redux/api/userApi'
import React from 'react'
import { UserDataTable } from './components/userDataTable';
import { columns } from './components/column';
import CustomLoader from '@/components/shared/CustomLoader/CustomLoader';

const UserManagementPage = () => {
  const {data,isLoading}=useGetAllUsersQuery({});


  console.log(data?.users.data)
  
  return (
   <section className='py-5'>
    <div>
      <h3 className='text xl md:text-3xl font-bold'>All users</h3>
     {
      isLoading? <CustomLoader/>:(
        <UserDataTable data={data?.users?.data} columns={columns}/>
      )
     }
    </div>

   </section>
  )
}

export default UserManagementPage