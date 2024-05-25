import { USER_ROLE } from "@/constants/role";


export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type UserRole = keyof typeof USER_ROLE;



export interface ISidebarItem {
  title: string;
  path?: string ;
  icon: React.ElementType;
  subMenu?: ISidebarItem[]; 
}
export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message:string
};



// types.ts

export interface FlatData {
  id: string;
  location: string;
  space: string;
  rentAmount: string;
  advanceAmount: string;
  description: string;
  amenities: string;
  bedRooms: string;
}

export interface FlatUpdateFormProps {
  data: FlatData | null;
  isLoading: boolean;
  onSuccess: () => void;
  onCancel: () => void;
}

export interface UpdateFlatDialogProps {
  data: FlatData | null;
  isLoading: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}
