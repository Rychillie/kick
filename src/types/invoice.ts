export type Invoice = {
  checked?: boolean;
  dueDate: string;
  status: string;
  customer: string;
  invoiceNo: string;
  invoiceDate: string;
  amount: string;
};

export type Invoices = Invoice[];
