import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateBlogPostDto, UpdateBlogPostDto } from './blog.dto';

@Injectable()
export class BlogPostsService {
  constructor(private prisma: PrismaService) {}

  async create(createBlogPostDto: CreateBlogPostDto) {
    return await this.prisma.blogPost.create({
      data: createBlogPostDto,
    });
  }

  async findAll() {
    return await this.prisma.blogPost.findMany();
  }

  async findOne(id: string) {
    const blogPost = await this.prisma.blogPost.findUnique({
      where: { id },
    });
    if (!blogPost) {
      throw new NotFoundException(`Blog post with ID "${id}" not found`);
    }
    return blogPost;
  }

  async update(id: string, updateBlogPostDto: UpdateBlogPostDto) {
    try {
      return await this.prisma.blogPost.update({
        where: { id },
        data: updateBlogPostDto,
      });
    } catch (error) {
      throw new NotFoundException(`Blog post with ID "${id}" not found`);
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.blogPost.delete({
        where: { id },
      });
    } catch (error) {
      throw new NotFoundException(`Blog post with ID "${id}" not found`);
    }
  }
}
