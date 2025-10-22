import { Injectable } from '@nestjs/common';

interface PollInterface {
  title: string, options: string[]
}

let fakeDatabaseJson: Record<string, PollInterface> = {};
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  storePoll(data: {title: string, options: string[]}): string {
    //validation needed
    console.log("stored", data);
    //generate the key and link. use the link queryparam as key to JSONDB
    //organisation needed as I don't want to oop through an array.
    const newField = data?.title.split(" ").join('') ?? "randomString";
    fakeDatabaseJson[newField] = data;
    console.log(fakeDatabaseJson);
    return data?.title;
  }
}
