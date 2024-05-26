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
