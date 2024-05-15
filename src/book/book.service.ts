// src/book/book.service.ts
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Book } from './schemas/book.schemas';
import { CreateBookDto } from './create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Query } from 'express-serve-static-core';
@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }


  async findAll(filter = {}, page = 1, limit = 10): Promise<Book[]> {
    const skip = (page - 1) * limit;
    return this.bookModel.find(filter).skip(skip).limit(limit).exec();
  }


  async findById(id: string): Promise<Book> {
    const isValid = mongoose.isValidObjectId(id);
    if(!isValid){
      throw new BadRequestException('Please Enter correct ID')
    }

    const book = await this.bookModel.findById(id).exec();
    if (!book) {
      throw new NotFoundException(`Book with ID "${id}" not found`);
    }
    return book;
  }
  async updateById(id: string, updateBookDto: UpdateBookDto): Promise<Book> {
    const updatedBook = await this.bookModel.findByIdAndUpdate(id, updateBookDto, { new: true }).exec();
    if (!updatedBook) {
      throw new NotFoundException(`Book with ID "${id}" not found`);
    }
    return updatedBook;
  }
}
