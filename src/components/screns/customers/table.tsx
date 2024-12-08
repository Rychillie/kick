'use client';

import { Table as TableContainer } from '@/components/elements/table';
import type { Customers } from '@/types/customer';
import TableBody from './table-body';
import TableHeader from './table-header';

export default function Table({ customers }: { customers?: Customers }) {
  return (
    <div className="flex size-full overflow-hidden rounded-xl border border-transparents-400">
      <TableContainer className="relative">
        <TableHeader />
        <TableBody customers={customers} />
      </TableContainer>
    </div>
  );
}
