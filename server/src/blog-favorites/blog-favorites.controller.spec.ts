import { Test, TestingModule } from '@nestjs/testing';
import { BlogFavoritesController } from './blog-favorites.controller';
import { BlogFavoritesService } from './blog-favorites.service';

describe('BlogFavoritesController', () => {
  let controller: BlogFavoritesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogFavoritesController],
      providers: [BlogFavoritesService],
    }).compile();

    controller = module.get<BlogFavoritesController>(BlogFavoritesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
