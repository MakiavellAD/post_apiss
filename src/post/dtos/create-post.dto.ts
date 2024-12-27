import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsInt } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    example: 'How to use NestJS',
    description: 'The title of the post',
  })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({
    example: 'A detailed guide on using NestJS...',
    description: 'The content of the post',
  })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({
    example: 1,
    description: 'The ID of the category this post belongs to',
  })
  @IsNotEmpty()
  @IsInt()
  categoryId: number;

  @ApiProperty({
    example: 1,
    description: 'The ID of the user who created the post',
  })
  @IsNotEmpty()
  @IsInt()
  userId: number;
}
