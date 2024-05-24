enum Status {
    PENDING = "PENDING",
    BOOKED = "BOOKED",
    REJECTED = "REJECTED"
  }

export interface IFlatData {
    id: string;
    location: string;
    description: string;
    rentAmount: number;
    bedRooms: string;
    availability: boolean;
    amenities: string;
    advanceAmount: number;
    userId: string;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;
    images?: Image[];
    bookings?: Booking[];
  }
 export interface IFlat {
    flats: {
      data: IFlatData[];
    };
  }
  
  // Image Model
  export interface Image {
    id: string;
    url: string;
    flatId: string;
  }
  
  // Booking Model
  export interface Booking {
    id: string;
    flatId: string;
    userId: string;
    status:Status ;
    createdAt: Date;
    updatedAt: Date;
  }
  