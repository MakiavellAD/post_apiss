import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { PostService } from './post.service';
import { QueryDto } from './dtos/query.dto';

@ApiTags('Posts')
@Controller('posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postService.create(createPostDto);
  }

  @Get()
  findAll(@Query() params: QueryDto) {
    return this.postService.findAll(params);
  }

  // ты по-моему перепутал
  // +id для тайп кастов -- полная хуйня. для params и query пиши такие же dtos, как и для body
  // так и валидацию можно навесить(вдруг у тебя id uuid вообще должен быть(@IsUUID)), и сделать тайп кастинг
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.postService.findOne(+id);
  }

  // ты по-моему перепутал
  // +id для тайп кастов -- полная хуйня. для params и query пиши такие же dtos, как и для body
  // так и валидацию можно навесить(вдруг у тебя id uuid вообще должен быть(@IsUUID)), и сделать тайп кастинг
  @Patch(':id')
  update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto) {
    return this.postService.update(+id, updatePostDto);
  }

  // ты по-моему перепутал
  // +id для тайп кастов -- полная хуйня. для params и query пиши такие же dtos, как и для body
  // так и валидацию можно навесить(вдруг у тебя id uuid вообще должен быть(@IsUUID)), и сделать тайп кастинг
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.postService.remove(+id);
  }
}
