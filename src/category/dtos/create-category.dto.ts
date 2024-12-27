import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({
    example: 'Technology',
    description: 'The name of the category',
  })
  @IsNotEmpty()
  @IsString()
  name: string;
}
