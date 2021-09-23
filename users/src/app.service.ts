import { Injectable } from '@nestjs/common';
import { User } from './app.interface';

@Injectable()
export class AppService {
  users = [
    { id: '1', login: 'bob' },
    { id: '2', login: 'john' },
  ];

  getUsers(): User[] {
    return this.users;
  }

  createUser(user: User): User {
    this.users.push(user);
    return user;
  }
}
