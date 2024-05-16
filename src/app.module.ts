import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtModule } from '@nestjs/jwt';
 
 
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
   // MongooseModule.forRoot('mongodb+srv://easycodechannel2024:Bihan20040207@rest-api-testing.nbrfffo.mongodb.net/test', {
    MongooseModule.forRoot('mongodb+srv://easycodechannel2024:Bihan20040207@rest-api-testing.nbrfffo.mongodb.net/?retryWrites=true&w=majority&appName=rest-api-testing'),
    BookModule,
    AuthModule,
    UsersModule,
    JwtModule,
 
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
