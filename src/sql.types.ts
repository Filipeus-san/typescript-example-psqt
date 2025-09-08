export interface Users {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  created_at: string;
  last_login?: string;
}

export interface Sql2 {
  invoice_id: number;
  invoice_number: string;
  customer_name: string;
  due_date: string;
  total_amount: number;
  currency: string;
  status: string;
  user_id: number;
  user_name: string;
  user_email: string;
  item_id: number;
  item_description: string;
  quantity: number;
  unit_price: number;
  vat_rate: number;
  n_item_total?: number;
  n_item_vat?: number;
}
