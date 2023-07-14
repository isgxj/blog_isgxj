import { Test, TestingModule } from '@nestjs/testing';
import { BlogCategorysController } from './blog-categorys.controller';
import { BlogCategorysService } from './blog-categorys.service';

describe('BlogCategorysController', () => {
  let controller: BlogCategorysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogCategorysController],
      providers: [BlogCategorysService],
    }).compile();

    controller = module.get<BlogCategorysController>(BlogCategorysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
