import { Injectable } from '@nestjs/common';
import type { InsertUser, Sql2, UpdateUser } from './sql.types';

@Injectable()
export class AppService {
  getHello(): string {
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

    // @sqlTypeName insertUser
    const sql3 = `INSERT INTO users (name, email, password_hash, last_login)
VALUES (
    ?,
    "",
    "",
    NOW()
);`;

    const insertUser: InsertUser = {
      name: '',
      email: '',
      password_hash: '',
    };
    console.log(insertUser);
    console.log(sql3);

    // @sqlTypeName updateUser
    const sql4 = `UPDATE users
SET 
    name = "",
    role = "",
    last_login = NOW()
WHERE email = "";`;

    const updateUser: UpdateUser = {
      name: '',
      role: 'user',
    };
    console.log(updateUser);
    console.log(sql4);

    return 'Hello world';
  }
}
