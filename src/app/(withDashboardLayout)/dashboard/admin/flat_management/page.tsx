'use client'


import React from 'react'

import { columns } from './components/column';
import CustomLoader from '@/components/shared/CustomLoader/CustomLoader';
import { useGetAllFlatsQuery } from '@/redux/api/flatApi';
import { FlatDataTable } from './components/flatDataTable';

const FlatManagementPage = () => {
  const {data,isLoading}=useGetAllFlatsQuery({});



  
  return (
   <section className='py-5'>
    <div>
      <h3 className='text xl md:text-3xl font-bold mb-4'>All Flats</h3>
     {
      isLoading? <CustomLoader/>:(
        <FlatDataTable data={data?.data} columns={columns}/>
      )
     }
    </div>

   </section>
  )
}

export default FlatManagementPage