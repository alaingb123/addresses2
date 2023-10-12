import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { MongooseModule } from '@nestjs/mongoose';
import UserSchema from 'src/users/schemas/user.schema';
import AddressSchema from './schemas/addresses.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'addresses', schema: AddressSchema}
    ])],
  controllers: [AddressesController],
  providers: [AddressesService],
})
export class AddressesModule {}
