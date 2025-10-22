import { Injectable, Options } from '@nestjs/common';

interface PollOption {
  option: string,
  votes: number
} 



interface PollInterface {
  title: string,
  options: Record<number, PollOption>,
  locked: boolean,
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
    let options = {};
    data.options.forEach((item: string, index: number) => {
      options[index.toString()] = {
        option: item,
        votes: 0
      }
    });
    const newPoll = {
      title: data.title,
      options: options,
      locked: false
    }
    //generate the key and link. use the link queryparam as key to JSONDB
    //organisation needed as I don't want to oop through an array.
    const newField = data?.title.split(" ").join('') ?? "randomString";
    fakeDatabaseJson[newField] = newPoll;
    console.log(fakeDatabaseJson);
    console.log(JSON.stringify(fakeDatabaseJson[newField]));
    return data?.title;
  }
}
