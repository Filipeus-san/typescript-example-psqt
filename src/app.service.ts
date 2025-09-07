import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // @sqlTypeName users
    const sql = 'SELECT id FROM users;';
    console.log(sql);

    // @sqlTypeName invoices
    const sql2 = 'SELECT * FROM invoices;';
    console.log(sql2);

    return sql;
  }
}
