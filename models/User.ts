export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  export class UserClass {
    private user: User;
  
    constructor(user: User) {
      this.user = user;
    }
  
    getUserInfo() {
      return `User: ${this.user.name}, Email: ${this.user.email}`;
    }
  }