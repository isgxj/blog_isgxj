import { Test, TestingModule } from '@nestjs/testing';
import { BlogSettingsController } from './blog-settings.controller';
import { BlogSettingsService } from './blog-settings.service';

describe('BlogSettingsController', () => {
  let controller: BlogSettingsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogSettingsController],
      providers: [BlogSettingsService],
    }).compile();

    controller = module.get<BlogSettingsController>(BlogSettingsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
