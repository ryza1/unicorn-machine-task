import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  storePoll(data: {title: String, options: String[]}): String {
    console.log("stored", data);
    return data.title;
  }
}
