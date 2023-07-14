import { Test, TestingModule } from '@nestjs/testing';
import { BlogCategorysService } from './blog-categorys.service';

describe('BlogCategorysService', () => {
  let service: BlogCategorysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogCategorysService],
    }).compile();

    service = module.get<BlogCategorysService>(BlogCategorysService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
