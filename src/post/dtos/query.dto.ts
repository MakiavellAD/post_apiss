import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsOptional,
  IsNumber,
  IsInt,
  Min,
  Max,
  IsArray,
  IsBoolean,
} from 'class-validator';

export class QueryDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @IsInt()
  @Min(1)
  @Max(100)
  @Transform(({ value }) => Number(value))
  limit: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  @IsInt()
  @Min(0)
  @Transform(({ value }) => Number(value))
  offset: number;

  @ApiPropertyOptional({
    type: [Number],
    example: [1, 2, 3],
    description: 'Filter by category IDs',
  })
  @IsOptional()
  @IsArray()
  @Transform(({ value }) =>
    Array.isArray(value) ? value.map((v) => Number(v)) : [Number(value)],
  )
  categoryIds: number[];

  @ApiPropertyOptional({
    type: () => Boolean,
    description: 'Show posts only for last week',
  })
  @IsBoolean()
  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true') return true;
    if (value === 'false') return false;
    return null;
  })
  showForLastWeek: boolean;
}
