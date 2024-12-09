import { Button, Text } from '@/components/elements';
import { Invoices } from '@/components/screns';
import { EmptyState } from '@/components/ui';
import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

export default async function InvoicesPage() {
  const supabase = await createClient();
  const { data: invoices } = await supabase
    .from('Invoices')
    .select('*, customer:customer_id(*)');

  return (
    <div className="flex size-full flex-col gap-6 overflow-scroll p-6">
      {invoices && invoices.length >= 1 ? (
        <>
          <div className="flex items-center justify-between">
            <Text as="h1" size="24" weight="semibold">
              Invoices
            </Text>

            <Link href="/invoices/create">
              <Button className="w-full">Create Invoice</Button>
            </Link>
          </div>
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
