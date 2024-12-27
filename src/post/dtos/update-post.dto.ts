import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';

// про это писал в update-categort.dto.ts -- нейминг файла кстати корявый(categort)
export class UpdatePostDto extends PartialType(CreatePostDto) {}
