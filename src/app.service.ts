import { Injectable } from '@nestjs/common';
import type { Sql2, Users } from './sql.types';

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
    };
    console.log(users);
    console.log(sql);

    // @sqlTypeName sql2
    const sql2 = `SELECT 
    i.id AS invoice_id,
    i.invoice_number,
    i.customer_name,
    i.due_date,
    i.total_amount,
    i.currency,
    i.status,
    u.id AS user_id,
    u.name AS user_name,
    u.email AS user_email,
    ii.id AS item_id,
    ii.description AS item_description,
    ii.quantity,
    ii.unit_price,
    ii.vat_rate,
    (ii.quantity * ii.unit_price) AS n_item_total,
    ((ii.quantity * ii.unit_price) * (ii.vat_rate / 100)) AS n_item_vat
FROM invoices i
LEFT JOIN users u 
    ON i.user_id = u.id
JOIN invoice_items ii 
    ON i.id = ii.invoice_id
ORDER BY i.id, ii.id; `;

    const invoice: Sql2 = {
      invoice_id: 0,
      invoice_number: '',
      customer_name: '',
      due_date: '',
      total_amount: 0,
      currency: '',
      status: '',
      user_id: 0,
      user_name: '',
      user_email: '',
      item_id: 0,
      item_description: '',
      quantity: 0,
      unit_price: 0,
      vat_rate: 0,
      n_item_total: 0,
      n_item_vat: 0,
    };
    console.log(invoice);
    console.log(sql2);

    return sql;
  }
}
