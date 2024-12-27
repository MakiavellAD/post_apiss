import { UserService } from './user.service';
import { CreateUserDto } from './dtos/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
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
