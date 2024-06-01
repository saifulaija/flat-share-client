export interface Image {
  id: string;
  url: string;
  flatId: string;
}

export interface Booking {
  id: string;
  flatId: string;
  userId: string;
  isDeleted: boolean;
  status: "PENDING" | "BOOKED" | "REJECTED";
  createdAt: string;
  updatedAt: string;
}

export interface RequestFlat {
  id: string;
  userName: string;
  email: string;
  profession: string;
  contactNumber: string;
  address: string;
  additionalInformation: string;
  termsAndCondition: string;
  bookingId: string;
  flattId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  booking: Booking;
}

export interface UserProfile {
  id: string;
  userName: string;
  email: string;
  role: string;
  bio: string;
  profession: string;
  profilePhoto: string;
  address: string;
  contactNumber: string;
  userId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  userName: string;
  role: string;
  email: string;
  password: string;
  profilePhoto: string;
  status: string;
  isDeleted: boolean;
  passwordChangeRequired: boolean;
  createdAt: string;
  updatedAt: string;
  userProfile: UserProfile;
}

export interface Flat {
  id: string;
  location: string;
  description: string;
  rentAmount: string;
  bedRooms: string;
  space: string;
  availability: boolean;
  amenities: string;
  advanceAmount: string;
  userId: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  image: Image[];
  Request_Flat: RequestFlat[];
  user: User;
}
