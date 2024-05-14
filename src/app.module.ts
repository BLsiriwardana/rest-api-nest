import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
 
@Module({
  imports: [
   // MongooseModule.forRoot('mongodb+srv://easycodechannel2024:Bihan20040207@rest-api-testing.nbrfffo.mongodb.net/test', {
    MongooseModule.forRoot('mongodb+srv://easycodechannel2024:Bihan20040207@rest-api-testing.nbrfffo.mongodb.net/test'),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
