import type { Customer } from './customer';

export type Invoice = {
  id: number;
  created_at: string;
  customer_id: number;
  amount: number;
  due_date: number;
  invoice_date: number;
  invoice_no: number;
  customer?: Customer;
};

export type Invoices = Invoice[];
