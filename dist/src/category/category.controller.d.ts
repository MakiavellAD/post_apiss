import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dtos/create-category.dto';
import { UpdateCategoryDto } from './dtos/update-categort.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
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
