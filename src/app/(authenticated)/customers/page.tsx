import { Button, Text } from '@/components/elements';
import { Customers } from '@/components/screns';
import { EmptyState } from '@/components/ui';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function CustomersPage() {
  const supabase = await createClient();
  const { data: customers } = await supabase.from('Customers').select('*');

  return (
    <div className="flex size-full flex-col gap-6 overflow-scroll p-6">
      {customers && customers.length >= 1 ? (
        <>
          <div className="flex items-center justify-between">
            <Text as="h1" size="24" weight="semibold">
              Customers
            </Text>

            <Link href="/customers#">
              <Button className="w-full">Create Customer</Button>
            </Link>
          </div>
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
