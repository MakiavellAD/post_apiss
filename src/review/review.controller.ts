import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReviewService } from './review.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateReviewDto } from './dtos/create-review.dto';
import { UpdateReviewDto } from './dtos/update-review.dto';

@ApiTags('Reviews')
@Controller('reviews')
export class ReviewController {
  constructor(private readonly reviewService: ReviewService) {}

  @Post()
  create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.create(createReviewDto);
  }

  @Get()
  findAll() {
    return this.reviewService.findAll();
  }

  // ты по-моему перепутал
  // +id для тайп кастов -- полная хуйня. для params и query пиши такие же dtos, как и для body
  // так и валидацию можно навесить(вдруг у тебя id uuid вообще должен быть(@IsUUID)), и сделать тайп кастинг
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.reviewService.findOne(+id);
  }

  // ты по-моему перепутал
  // +id для тайп кастов -- полная хуйня. для params и query пиши такие же dtos, как и для body
  // так и валидацию можно навесить(вдруг у тебя id uuid вообще должен быть(@IsUUID)), и сделать тайп кастинг
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewService.update(+id, updateReviewDto);
  }

  // ты по-моему перепутал
  // +id для тайп кастов -- полная хуйня. для params и query пиши такие же dtos, как и для body
  // так и валидацию можно навесить(вдруг у тебя id uuid вообще должен быть(@IsUUID)), и сделать тайп кастинг
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.reviewService.remove(+id);
  }
}
