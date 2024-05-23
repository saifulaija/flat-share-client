import AddFlatForm from '@/components/Form/AddFlatForm'
import React from 'react'

const FlatSharePage = () => {
  return (
    <div className='mt-10 flex justify-center items-center w-full mx-auto shadow-md rounded-sm'>
      <div className='w-full max-w-[1000px]'>

        <p className='text-center font-semibold text-xl uppercase tracking-widest'>Add Your flat</p>

    <AddFlatForm/>
      </div>

    </div>
  )
}

export default FlatSharePage