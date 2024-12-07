'use client';

import { Table as TableContainer } from '@/components/elements/table';
import TableBody from './table-body';
import TableHeader from './table-header';

export default function Table() {
  return (
    <div className="flex size-full max-h-full min-h-fit overflow-hidden rounded-xl border border-transparents-400 dark:border-neutral-900">
      <TableContainer className="relative">
        <TableHeader />
        <TableBody />
      </TableContainer>
    </div>
  );
}
