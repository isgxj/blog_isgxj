import { Test, TestingModule } from '@nestjs/testing';
import { BlogUsersController } from './blog-users.controller';
import { BlogUsersService } from './blog-users.service';

describe('BlogUsersController', () => {
  let controller: BlogUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogUsersController],
      providers: [BlogUsersService],
    }).compile();

    controller = module.get<BlogUsersController>(BlogUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
