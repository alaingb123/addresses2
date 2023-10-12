import { Schema } from "mongoose";
import { Address } from "../interfaces/address.interface";


  
  export const AddressSchema: Schema = new Schema<Address>({
    id: Schema.Types.ObjectId,
    name: { type: String },
    street_address: { type: String },
    street_address2: { type: String,requerid: false },
    city: { type: String },
    state: { type: String },
    postal_code:{ type: String },
    country:{ type: String },
    phone_number:{ type: Number },
  });
  
  export default AddressSchema;