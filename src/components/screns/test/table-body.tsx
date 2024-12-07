import { Checkbox, Table as T, Tag } from '@/components/elements';
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
          <T.TableCell
            role="checkbox"
            className="flex w-fit items-center justify-center"
          >
            <Checkbox />
          </T.TableCell>
          <T.TableCell>{invoice.dueDate}</T.TableCell>
          <T.TableCell className="min-w-[103px]">
            <Tag
              indent={
                invoice.status === 'Paid'
                  ? 'Outline-Blue'
                  : invoice.status === 'Overdue'
                    ? 'Outline-Yellow'
                    : 'Outline-Gray'
              }
            >
              {invoice.status}
            </Tag>
          </T.TableCell>
          <T.TableCell className="w-full min-w-56">
            {invoice.customer}
          </T.TableCell>
          <T.TableCell className="text-right">{invoice.invoiceNo}</T.TableCell>
          <T.TableCell className="text-right">
            {invoice.invoiceDate}
          </T.TableCell>
          <T.TableCell className="text-right">{invoice.amount}</T.TableCell>
        </T.TableRow>
      ))}
    </T.TableBody>
  );
}
