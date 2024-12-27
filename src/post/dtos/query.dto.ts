import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional, IsNumber, IsInt, Min, Max } from 'class-validator';

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
}
