import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { Address } from './interfaces/address.interface';


@Injectable()
export class AddressesService {

  constructor(
  
    @InjectModel('addresses')
    private readonly addresModel: Model <Address>,
  ){}

  
 async create(createAddressDto: CreateAddressDto) {
    const  address = await new this.addresModel(createAddressDto);
    await address.save();
    return address;
  }

 async findAll() {
    return await this.addresModel.find();
  }

 async findOne(id: ObjectId) {
    const address = await this.addresModel.findById(id);
    if(!address){
      throw new BadRequestException ('Address not exist');
    }
    return address;
  }

 async update(id: ObjectId, updateAddressDto: UpdateAddressDto) {
    const updateUser = await this.addresModel.findByIdAndUpdate(id,updateAddressDto,{new:true})
    return updateUser;
  }

 async remove(id: ObjectId) {
    return await this.addresModel.findByIdAndDelete(id);
  }
}
