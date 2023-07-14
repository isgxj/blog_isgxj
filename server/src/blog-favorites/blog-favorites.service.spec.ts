import { Test, TestingModule } from '@nestjs/testing';
import { BlogFavoritesService } from './blog-favorites.service';

describe('BlogFavoritesService', () => {
  let service: BlogFavoritesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogFavoritesService],
    }).compile();

    service = module.get<BlogFavoritesService>(BlogFavoritesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
