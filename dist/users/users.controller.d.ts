import { UsersService } from './users.service';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    findOne(id: string): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    create(user: {
        name: string;
        email: string;
        role: ('INTERN') | 'ENGINEER' | 'ADMIN';
    }): {
        name: string;
        email: string;
        role: "INTERN" | "ENGINEER" | "ADMIN";
        id: number;
    };
    update(id: string, userUpdate: {
        name?: string;
        email?: string;
        role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    }): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    delete(id: string): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
}
