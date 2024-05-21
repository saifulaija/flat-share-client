import { DashboardLayout } from '@/components/Dashboard/DashboardLayout'
import React from 'react'

const DashboardLayoutNew = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      
       <DashboardLayout>
        {children}
       </DashboardLayout>
    </div>
  )
}

export default DashboardLayoutNew