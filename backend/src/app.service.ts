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


  votePoll(data: {poll_id: string, key: number}): PollInterface {
    console.log(fakeDatabaseJson, fakeDatabaseJson[data.poll_id]);
    fakeDatabaseJson[data.poll_id].options[data.key].votes = fakeDatabaseJson[data.poll_id].options[data.key].votes + 1;

    console.log(fakeDatabaseJson[data.poll_id]);

    return fakeDatabaseJson[data.poll_id];
  }


  storePoll(data: {title: string, options: string[]}): {link: string} {
    //validation needed
    
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
    const uniqId = (data?.title.split(" ").join(''))?.toLowerCase() + Math.floor(Math.random()*1000);
    const newField = uniqId ?? "randomString";
    fakeDatabaseJson[newField] = newPoll;
    console.log(fakeDatabaseJson);
    console.log(JSON.stringify(fakeDatabaseJson[newField]));
    const shareableUrl = "poll/" +uniqId;
    return {
      link: shareableUrl
    };
  }
  getPoll(poll_id: number): PollInterface {
    const result = fakeDatabaseJson[poll_id];
    console.log("rsult", result)
    return result;
  }
}
