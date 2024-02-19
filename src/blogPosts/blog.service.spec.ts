import { Test, TestingModule } from '@nestjs/testing';
import { BlogPostsService } from './blog.service';

describe('EnpointsService', () => {
  let service: BlogPostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogPostsService],
    }).compile();

    service = module.get<BlogPostsService>(BlogPostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
