import { PartialType } from '@nestjs/mapped-types';
import { CreateCategoryDto } from './create-category.dto';

/**
 * обычно работал так
 * export class UpdateCategoryDto implements Partial<CreateCategoryDto> {}
 * +- и минусы наших подходов не ебу
 */

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) {}
