import { Test, TestingModule } from '@nestjs/testing';
import { BlogLinksService } from './blog-links.service';

describe('BlogLinksService', () => {
  let service: BlogLinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogLinksService],
    }).compile();

    service = module.get<BlogLinksService>(BlogLinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
