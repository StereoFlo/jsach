import { Test, TestingModule } from '@nestjs/testing';
import { ThreadListController } from './thread-list.controller';

describe('ThreadListController', () => {
  let controller: ThreadListController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ThreadListController],
    }).compile();

    controller = module.get<ThreadListController>(ThreadListController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
