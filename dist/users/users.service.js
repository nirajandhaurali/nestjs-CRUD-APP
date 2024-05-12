"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
            { "id": 1,
                "name": "nirajan",
                "email": "nirajan@gmail.com",
                "role": "INTERN"
            },
            {
                "id": 2,
                "name": "ganesh",
                "email": "ganesh@gmail.com",
                "role": "INTERN"
            },
            {
                "id": 3,
                "name": "sumnima",
                "email": "simnima@gmail.com",
                "role": "ENGINEER"
            },
            {
                "id": 4,
                "name": "ram",
                "email": "ram@gmail.com",
                "role": "ENGINEER"
            },
            {
                "id": 5,
                "name": "hari",
                "email": "hari@gmail.com",
                "role": "ADMIN"
            }
        ];
    }
    findAll(role) {
        if (role) {
            return this.users.filter(user => user.role === role);
        }
        return this.users;
    }
    findOne(id) {
        const user = this.users.find(user => user.id === id);
        return user;
    }
    create(user) {
        const usersByHighestId = [...this.users].sort((a, b) => b.id - a.id);
        const newUser = {
            id: usersByHighestId[0].id + 1,
            ...user
        };
        this.users.push(newUser);
        return newUser;
    }
    update(id, updatedUser) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updatedUser };
            }
            return user;
        });
        return this.findOne(id);
    }
    delete(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            const removedUser = this.users.splice(index, 1)[0];
            return removedUser;
        }
        return null;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map