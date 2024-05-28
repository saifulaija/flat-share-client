export interface IUser {
  id: string;
  userName: string;
  email: string;
  role: string;
  bio: string | null;
  profession: string | null;
  profilePhoto: string | null;
  address: string | null;
  contactNumber: string | null;
  userId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}


export interface IUserData {
  id: string;
  userName: string;
  email: string;
  role: "ADMIN" | "USER";
  status: "ACTIVE" | "DEACTIVE";
  profilePhoto?: string | null;
  createdAt: string;
  updatedAt: string;
}

export type TUserData = {
  users: {
    data: IUserData[];
  };
};
