import { ObjectId } from "mongoose";




export interface Address extends Document {
    id: ObjectId;
    name: string;
    street_address: string;
    street_address2?: string;
    city: string;
    state: string;
    postal_code:string;
    country:string;
    phone_number:number;
  
  }