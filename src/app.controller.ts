import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Inject, Injectable } from '@nestjs/common';
import { app } from 'firebase-admin';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  };
 

 
 
}

 