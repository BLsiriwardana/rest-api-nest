// src/book/book.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book } from './schemas/book.schemas';
import { CreateBookDto } from './create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const createdBook = new this.bookModel(createBookDto);
    return createdBook.save();
  }

  async findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  async findById(id: string): Promise<Book> {
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
