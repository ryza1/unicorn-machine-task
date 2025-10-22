import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('store-poll')
  storePoll(data: {title: String, options: String[]}) {
    return this.appService.storePoll(data)
  }

}
