import { IsNotEmpty, IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({
    example: 'Great post!',
    description: 'The content of the review',
  })
  @IsNotEmpty()
  @IsString()
  content: string;

  @ApiProperty({ example: 5, description: 'The rating for the post (1-5)' })
  @IsNotEmpty()
  @IsInt()
  rating: number;

  //no auth no userId from request identity
  @ApiProperty({
    example: 1,
    description: 'The ID of the user who wrote the review',
  })
  @IsNotEmpty()
  @IsInt()
  userId: number;

  @ApiProperty({ example: 1, description: 'The ID of the post being reviewed' })
  @IsNotEmpty()
  @IsInt()
  postId: number;
}
