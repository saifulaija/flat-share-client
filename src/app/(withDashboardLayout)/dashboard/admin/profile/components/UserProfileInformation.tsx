import { IUser } from '@/types/user'
import React from 'react'
interface UserProfileInformationProps {
    data: IUser;
  }
const UserProfileInformation: React.FC<UserProfileInformationProps> = ({data}) => {
  return (
    <div className="lg:col-span-2 items-center space-y-2">
            <div className="text-muted-foreground bg-muted/95 flex-col px-8 py-2 rounded-sm">
              <p className="text-xl font-semibold">Role</p>
              <p className="text-sm text-muted-foreground/90 font-medium capitalize">{data?.role}</p>
            </div>
            <div className="text-muted-foreground bg-muted/95 flex-col px-8 py-2 rounded-sm">
              <p className="text-xl font-semibold">UsrName</p>
              <p className="text-sm text-muted-foreground/90 font-medium capitalize"> {data?.userName}</p>
            </div>
            <div className="text-muted-foreground bg-muted/95 flex-col px-8 py-2 rounded-sm">
              <p className="text-xl font-semibold">Email</p>
              <p className="text-sm text-muted-foreground/90 font-medium lowercase"> {data?.email}</p>
            </div>
            <div className="text-muted-foreground bg-muted/95 flex-col px-8 py-2 rounded-sm">
              <p className="text-xl font-semibold">Contact Number</p>
              <p className="text-sm text-muted-foreground/90 font-medium capitalize"> {data?.contactNumber}</p>
            </div>

            <div className="text-muted-foreground bg-muted/95 flex-col px-8 py-2 rounded-sm">
              <p className="text-xl font-semibold">Address</p>
              <p className="text-sm text-muted-foreground/90 font-medium capitalize"> {data?.address}</p>
            </div>
            <div className="text-muted-foreground bg-muted/95 flex-col px-8 py-2 rounded-sm">
              <p className="text-xl font-semibold">Profession</p>
              <p className="text-sm text-muted-foreground/90 font-medium capitalize"> {data?.profession}</p>
            </div>
            <div className="text-muted-foreground bg-muted/95 flex-col px-8 py-2 rounded-sm">
              <p className="text-xl font-semibold">Biography</p>
              <p className="text-sm text-muted-foreground/90 font-medium capitalize"> {data?.bio}</p>
            </div>
          </div>
  )
}

export default UserProfileInformation