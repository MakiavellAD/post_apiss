import { PrismaService } from '../../prisma/prisma.service';
import { CreateReviewDto } from './dtos/create-review.dto';
import { UpdateReviewDto } from './dtos/update-review.dto';
export declare class ReviewService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createReviewDto: CreateReviewDto): Promise<{
        id: number;
        content: string;
        rating: number;
        userId: number;
        postId: number;
    }>;
    findAll(): Promise<({
        user: {
            id: number;
            name: string;
            email: string;
        };
        post: {
            id: number;
            content: string;
            userId: number;
            title: string;
            createdAt: Date;
            updatedAt: Date;
            categoryId: number;
        };
    } & {
        id: number;
        content: string;
        rating: number;
        userId: number;
        postId: number;
    })[]>;
    findOne(id: number): Promise<{
        user: {
            id: number;
            name: string;
            email: string;
        };
        post: {
            id: number;
            content: string;
            userId: number;
            title: string;
            createdAt: Date;
            updatedAt: Date;
            categoryId: number;
        };
    } & {
        id: number;
        content: string;
        rating: number;
        userId: number;
        postId: number;
    }>;
    update(id: number, updateReviewDto: UpdateReviewDto): Promise<{
        id: number;
        content: string;
        rating: number;
        userId: number;
        postId: number;
    }>;
    remove(id: number): Promise<{
        id: number;
        content: string;
        rating: number;
        userId: number;
        postId: number;
    }>;
}
