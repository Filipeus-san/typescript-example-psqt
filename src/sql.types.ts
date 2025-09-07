export interface Users {
  id: number;
  name: string;
  email: string;
  password_hash: string;
  created_at: string;
  last_login: string;
}

export interface Invoices {
  id: number;
  invoice_number: string;
  user_id: number;
  customer_name: string;
  issue_date: string;
  due_date: string;
  total_amount: number;
  currency: string;
  status: string;
  created_at: string;
}
