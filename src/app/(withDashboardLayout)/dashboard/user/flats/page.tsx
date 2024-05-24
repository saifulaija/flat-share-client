'use client'


import { useState } from 'react'
import { EditModal } from './components/EditModal'

const FlatsPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className="mt-8">
    <EditModal
     
      open={open}
      setOpen={setOpen}
    />
  </div>
  )
}

export default FlatsPage