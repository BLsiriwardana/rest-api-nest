// src/book/book.controller.ts
import { Controller, Get, Post, Body, Param, Put, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schemas';
import { CreateBookDto } from './create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import { title } from 'process';
import { QueryBookDto } from './dto/query-book.dto';
@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

//   @Get()
//   async getAllBooks(): Promise<Book[]> {
//     return this.bookService.findAll();
//   }

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

  @Get()
  async getAllBooks(@Query() query: QueryBookDto): Promise<Book[]> {
    const recordPerPage = 1;
    const currentPage = Number(query.page) || 1;
    const skip = recordPerPage * (currentPage - 1)
    const filter = query.keyword ? {
      title: {
        $regex: query.keyword,
        $options: 'i',
      },
    } : {};

    return this.bookService.findAll(filter, currentPage, recordPerPage);
  }


}
