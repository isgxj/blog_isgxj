import { Test, TestingModule } from '@nestjs/testing';
import { BlogSettingsService } from './blog-settings.service';

describe('BlogSettingsService', () => {
  let service: BlogSettingsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogSettingsService],
    }).compile();

    service = module.get<BlogSettingsService>(BlogSettingsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
