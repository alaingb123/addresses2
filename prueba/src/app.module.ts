
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AddressesModule } from './addresses/addresses.module';



@Module({
  imports: [  
    MongooseModule.forRoot('mongodb://localhost/addresses'),
      UsersModule,
      AuthModule,
      AddressesModule,
     ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
