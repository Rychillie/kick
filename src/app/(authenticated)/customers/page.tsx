import { Customers } from '@/components/screns';
import { EmptyState } from '@/components/ui';
import { createClient } from '@/lib/supabase/server';

export default async function CustomersPage() {
  const supabase = await createClient();
  const { data: customers } = await supabase.from('Customers').select('*');

  return (
    <div className="flex size-full flex-col gap-6 overflow-scroll p-6">
      {customers && customers.length >= 1 ? (
        <>
          <Customers.Filters />
          <Customers.Table customers={customers} />
        </>
      ) : (
        <EmptyState
          title="No customers registered yet"
          description="Add a new customer to see it here"
          buttonText="Create customer"
        />
      )}
    </div>
  );
}
