import { Test, TestingModule } from '@nestjs/testing';
import { BlogLikesController } from './blog-likes.controller';
import { BlogLikesService } from './blog-likes.service';

describe('BlogLikesController', () => {
  let controller: BlogLikesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogLikesController],
      providers: [BlogLikesService],
    }).compile();

    controller = module.get<BlogLikesController>(BlogLikesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
