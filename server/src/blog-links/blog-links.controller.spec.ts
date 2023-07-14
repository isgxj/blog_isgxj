import { Test, TestingModule } from '@nestjs/testing';
import { BlogLinksController } from './blog-links.controller';
import { BlogLinksService } from './blog-links.service';

describe('BlogLinksController', () => {
  let controller: BlogLinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogLinksController],
      providers: [BlogLinksService],
    }).compile();

    controller = module.get<BlogLinksController>(BlogLinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
