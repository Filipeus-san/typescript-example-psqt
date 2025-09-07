import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    // @sqlTypeName users
    const sql = 'SELECT a, * FROM users;';

    // @sqlTypeName invoices
    const _sql2 = 'SELECT * FROM invoices;';

    return sql;
  }
}
