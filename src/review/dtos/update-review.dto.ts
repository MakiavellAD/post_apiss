import { PartialType } from '@nestjs/mapped-types';
import { CreateReviewDto } from './create-review.dto';

// про это писал в update-categort.dto.ts
export class UpdateReviewDto extends PartialType(CreateReviewDto) {}
