import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {   "id":1,
            "name":"nirajan",
            "email":"nirajan@gmail.com",
            "role":"INTERN"
          },
          {  
            "id":2,
            "name":"ganesh",
            "email":"ganesh@gmail.com",
            "role":"INTERN"
          },
          {   
            "id":3,
            "name":"sumnima",
            "email":"simnima@gmail.com",
            "role":"ENGINEER"
          },
          {   
            "id":4,
            "name":"ram",
            "email":"ram@gmail.com",
            "role":"ENGINEER"
          },
          {   
            "id":5,
            "name":"hari",
            "email":"hari@gmail.com",
            "role":"ADMIN"
          }

    ]


    findAll(role?:'INTERN'|'ENGINEER'|'ADMIN'){
        if(role){
            return this.users.filter(user => user.role===role)
        }
        return this.users
    }

    findOne(id: number){
        const user = this.users.find(user=>user.id===id)
        return user

    }

    create(user: {name:string,email:string,role:'INTERN'|'ENGINEER'|'ADMIN'}){
        const usersByHighestId = [...this.users].sort((a,b) => b.id-a.id)
        const newUser={
            id: usersByHighestId[0].id+1,
            ...user
        }
        this.users.push(newUser)
        return newUser

    }

    update(id:number,updatedUser:{name?:string,email?:string,role?:'INTERN'|'ENGINEER'|'ADMIN'}){
        this.users=this.users.map(user => {
            if(user.id===id){
                return{...user, ...updatedUser}
            
            }
            return user
        })
        return this.findOne(id)
    }

    delete(id: number){
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
          const removedUser = this.users.splice(index, 1)[0];
          return removedUser;
        }
        return null; // Return null if user with specified id is not found
      }
      

    // delete(id:number){
    //     const removedUser=this.findOne(id)
    //     this.users=this.users.filter(user=>user.id ! == id)
    //     return removedUser
    // }
}
