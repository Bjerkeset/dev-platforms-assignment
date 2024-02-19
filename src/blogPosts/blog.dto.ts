import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateBlogPostDto {
  @ApiProperty({
    example: 'UniqueTitle123',
    description: 'The title of the blog post',
  })
  title: string;

  @ApiProperty({
    example: 'This is a great blog post about NestJS and Swagger.',
    description: 'The content of the blog post',
  })
  content: string;
}

export class UpdateBlogPostDto {
  @ApiPropertyOptional({
    example: 'UpdatedTitle',
    description: 'The title of the blog post',
  })
  title?: string;

  @ApiPropertyOptional({
    example: 'This is updated content for the blog post.',
    description: 'The content of the blog post',
  })
  content?: string;
}
