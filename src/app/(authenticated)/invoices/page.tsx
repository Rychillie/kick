import { Invoices } from '@/components/screns';
import { EmptyState } from '@/components/ui';
import { createClient } from '@/lib/supabase/server';

export default async function InvoicesPage() {
  const supabase = await createClient();
  const { data: invoices } = await supabase
    .from('Invoices')
    .select('*, customer:customer_id(*)');

  return (
    <div className="flex size-full flex-col gap-6 overflow-scroll p-6">
      {invoices && invoices.length >= 1 ? (
        <>
          <Invoices.Filters />
          <Invoices.Table invoices={invoices} />
        </>
      ) : (
        <EmptyState
          title="No invoices registered yet"
          description="Add a new invoice to see it here"
          buttonText="Create invoice"
        />
      )}
    </div>
  );
}
