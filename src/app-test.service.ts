import { Injectable } from '@nestjs/common';
import type { Users } from './sql.types';

@Injectable()
export class AppService {
  getHello(): string {
    // @sqlTypeName users
    const sql = 'SELECT * FROM users;';
    const users: Users = {
      id: 0,
      name: '',
      email: '',
      password_hash: '',
      created_at: '',
      role: 'user',
    };
    console.log(users);
    console.log(sql);

    return 'Hello world';
  }
}
