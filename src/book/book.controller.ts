// src/book/book.controller.ts
import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schemas';
import { CreateBookDto } from './create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getAllBooks(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Post()
  async createBook(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.bookService.create(createBookDto);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Book> {
    return this.bookService.findById(id);
  }

  @Put(':id')
  async updateBook(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto): Promise<Book> {
    return this.bookService.updateById(id, updateBookDto);
  }

}
