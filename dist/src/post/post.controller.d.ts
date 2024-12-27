import { CreatePostDto } from './dtos/create-post.dto';
import { UpdatePostDto } from './dtos/update-post.dto';
import { PostService } from './post.service';
import { QueryDto } from './dtos/query.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    create(createPostDto: CreatePostDto): Promise<{
        id: number;
        title: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
        userId: number;
    }>;
    findAll(params: QueryDto): Promise<({
        category: {
            id: number;
            name: string;
        };
        user: {
            id: number;
            name: string;
            email: string;
        };
    } & {
        id: number;
        title: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
        userId: number;
    })[]>;
    findOne(id: number): Promise<{
        category: {
            id: number;
            name: string;
        };
        user: {
            id: number;
            name: string;
            email: string;
        };
    } & {
        id: number;
        title: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
        userId: number;
    }>;
    update(id: number, updatePostDto: UpdatePostDto): Promise<{
        id: number;
        title: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
        userId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        title: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: number;
        userId: number;
    }>;
}
