import { Controller, Get, Post, Body, Req} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('query-poll')
  getPoll(@Req() req: any): any {
    return this.appService.getPoll(req.query?.poll)
  }

  @Post('store-poll')
  async storePoll(@Body() body: {title: string, options: string[]}) {
    return this.appService.storePoll((body));
  }

  @Post('vote-poll')
  votePoll(@Body() body: {poll_id: string, key: number}) {
    return this.appService.votePoll((body));
  }

}
