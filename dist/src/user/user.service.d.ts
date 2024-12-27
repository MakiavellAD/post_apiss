import { CreateUserDto } from './dtos/create-user.dto';
import { PrismaService } from '../../prisma/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): Promise<{
        name: string;
        email: string;
        id: number;
    }>;
    findAll(): Promise<{
        name: string;
        email: string;
        id: number;
    }[]>;
    findOne(id: number): Promise<{
        name: string;
        email: string;
        id: number;
    }>;
    update(id: number, updateUserDto: CreateUserDto): Promise<{
        name: string;
        email: string;
        id: number;
    }>;
    remove(id: number): Promise<{
        name: string;
        email: string;
        id: number;
    }>;
}
