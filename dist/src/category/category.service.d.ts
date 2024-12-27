import { PrismaService } from '../../prisma/prisma.service';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-categort.dto';
export declare class CategoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createCategoryDto: CreateCategoryDto): Promise<{
        id: number;
        name: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        name: string;
    }>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
    }>;
}
