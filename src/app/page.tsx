import { Button, Checkbox, Input } from '@/components/elements';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/elements/table';
import { invoices } from '@/constants';

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-6 overflow-scroll p-6">
      <div className="flex items-center justify-between overflow-hidden rounded-xl border border-transparents-400 p-4">
        <div className="flex items-center justify-center gap-3">
          <Input icon="search" placeholder="Search..." />
          <Button icon="filter" intent="secondary">
            Add filter
          </Button>
        </div>

        <div className="flex items-center justify-center gap-3">
          <Button icon="chevron-down" iconPosition="right" intent="secondary">
            5 entities
          </Button>
          <Button>Create Invoice</Button>
        </div>
      </div>

      <div className="flex h-screen w-full overflow-hidden rounded-xl border border-transparents-400">
        <Table className="relative">
          <TableHeader>
            <TableRow>
              <TableHead
                role="checkbox"
                className="flex w-fit items-center justify-center"
              >
                <Checkbox />
              </TableHead>
              <TableHead>Due date</TableHead>
              <TableHead className="min-w-[103px]">Status</TableHead>
              <TableHead className="w-full min-w-56">Customer</TableHead>
              <TableHead className="text-right">Invoice no.</TableHead>
              <TableHead className="text-right">Invoice date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice, i) => (
              <TableRow key={i}>
                <TableCell
                  role="checkbox"
                  className="flex w-fit items-center justify-center"
                >
                  <Checkbox />
                </TableCell>
                <TableCell>{invoice.dueDate}</TableCell>
                <TableCell className="min-w-[103px]">
                  {invoice.status}
                </TableCell>
                <TableCell className="w-full min-w-56">
                  {invoice.customer}
                </TableCell>
                <TableCell className="text-right">
                  {invoice.invoiceNo}
                </TableCell>
                <TableCell className="text-right">
                  {invoice.invoiceNo}
                </TableCell>
                <TableCell className="text-right">{invoice.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
