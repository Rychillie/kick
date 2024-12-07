import { Test } from '@/components/screns';
import { EmptyState } from '@/components/ui';
// import { invoices } from '@/constants';

export default function InvoicesPage() {
  const invoices = null;

  return (
    <div className="flex size-full flex-col gap-6 overflow-scroll p-6">
      {!invoices ? (
        <EmptyState
          title="No invoices registered yet"
          description="Add a new invoice to see it here"
          buttonText="Create invoice"
        />
      ) : (
        <>
          <Test.Filters />
          <Test.Table invoices={invoices} />
        </>
      )}
    </div>
  );
}
