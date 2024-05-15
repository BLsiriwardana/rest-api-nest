// book.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas/book.schemas';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { JwtModule } from '@nestjs/jwt';
 
@Module({
  imports: [MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }])],
  providers: [BookService],
  controllers: [BookController],
})
export class BookModule {}
