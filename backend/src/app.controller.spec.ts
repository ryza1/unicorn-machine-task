import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('store-poll', () => {
    it('should return "this is a poll"', () => {
      const inputData = {
        title: "this is a poll",
        options: ["option A", "option B"]
      }
      expect(appController.storePoll(inputData)).toBe('this is a poll');
    });
  });
});
