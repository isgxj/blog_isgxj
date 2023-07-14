import { Test, TestingModule } from '@nestjs/testing';
import { BlogUsersService } from './blog-users.service';

describe('BlogUsersService', () => {
  let service: BlogUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogUsersService],
    }).compile();

    service = module.get<BlogUsersService>(BlogUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
