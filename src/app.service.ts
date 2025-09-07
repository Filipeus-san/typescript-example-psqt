import { Injectable } from '@nestjs/common';
import type { Invoices } from './sql.types';

@Injectable()
export class AppService {
  getHello(): string {
    // @sqlTypeName users
    const sql = 'SELECT id FROM users;';
    console.log(sql);

    // @sqlTypeName invoices
    const sql2 = 'SELECT id FROM invoices;';
    const invoice: Invoices = {
      id: 0,
      invoice_number: '',
      user_id: 0,
      customer_name: '',
      issue_date: '',
      due_date: '',
      total_amount: 0,
      currency: '',
      status: '',
      created_at: '',
    };
    console.log(invoice);
    console.log(sql2);

    return sql;
  }
}
