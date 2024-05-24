// 'use client'


// import { useState } from 'react'
// import { EditModal } from './components/EditModal'

// const FlatsPage = () => {
//   const [open, setOpen] = useState(false)
//   return (
//     <div className="mt-8">
//     <EditModal
     
//       open={open}
//       setOpen={setOpen}
//     />
//   </div>
//   )
// }

// export default FlatsPage

import AddFlatForm from '@/components/Form/AddFlatForm'
import React from 'react'

const FlatSharePage = () => {
  return (
    <div className='mt-10 flex justify-center items-center w-full mx-auto shadow-md rounded-sm'>
      <div className='w-full max-w-[1000px]'>

        <p className='text-center font-semibold text-xl uppercase tracking-widest pb-10'>Add Your flat</p>

    <AddFlatForm/>
      </div>

    </div>
  )
}

export default FlatSharePage