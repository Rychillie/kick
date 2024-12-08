'use client';

import { Table as TableContainer } from '@/components/elements/table';
import type { Invoices } from '@/types/invoice';
import TableBody from './table-body';
import TableHeader from './table-header';

export default function Table({ invoices }: { invoices?: Invoices }) {
  return (
    <div className="flex size-full overflow-hidden rounded-xl border border-transparents-400">
      <TableContainer className="relative">
        <TableHeader />
        <TableBody invoices={invoices} />
      </TableContainer>
    </div>
  );
}
