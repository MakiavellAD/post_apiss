import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dtos/create-user.dto';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  async findAll() {
    return this.userService.findAll();
  }

  // ты по-моему перепутал
  // +id для тайп кастов -- полная хуйня. для params и query пиши такие же dtos, как и для body
  // так и валидацию можно навесить(вдруг у тебя id uuid вообще должен быть(@IsUUID)), и сделать тайп кастинг
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.userService.findOne(+id);
  }

  // ты по-моему перепутал
  // +id для тайп кастов -- полная хуйня. для params и query пиши такие же dtos, как и для body
  // так и валидацию можно навесить(вдруг у тебя id uuid вообще должен быть(@IsUUID)), и сделать тайп кастинг
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  // ты по-моему перепутал
  // +id для тайп кастов -- полная хуйня. для params и query пиши такие же dtos, как и для body
  // так и валидацию можно навесить(вдруг у тебя id uuid вообще должен быть(@IsUUID)), и сделать тайп кастинг
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.userService.remove(+id);
  }
}
