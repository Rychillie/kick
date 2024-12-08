import { Table as T } from '@/components/elements';
import type { Invoices } from '@/types/invoice';

export default function TableBody({ invoices }: { invoices?: Invoices }) {
  if (!invoices) {
    return (
      <T.TableBody>
        <T.TableRow>
          <T.TableCell colSpan={7} className="text-center">
            No invoices found
          </T.TableCell>
        </T.TableRow>
      </T.TableBody>
    );
  }

  return (
    <T.TableBody>
      {invoices.map((invoice, i) => (
        <T.TableRow key={i}>
          <T.TableCell>{invoice.due_date}</T.TableCell>
          <T.TableCell className="w-full min-w-56">
            {invoice.customer?.name}
          </T.TableCell>
          <T.TableCell className="text-right">
            INV-{invoice.invoice_no}
          </T.TableCell>
          <T.TableCell className="text-right">
            {invoice.invoice_date}
          </T.TableCell>
          <T.TableCell className="text-right">{invoice.amount}</T.TableCell>
        </T.TableRow>
      ))}
    </T.TableBody>
  );
}
