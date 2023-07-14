import { Test, TestingModule } from '@nestjs/testing';
import { BlogTagsController } from './blog-tags.controller';
import { BlogTagsService } from './blog-tags.service';

describe('BlogTagsController', () => {
  let controller: BlogTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogTagsController],
      providers: [BlogTagsService],
    }).compile();

    controller = module.get<BlogTagsController>(BlogTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
