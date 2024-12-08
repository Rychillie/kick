import { signout } from '@/actions';
import { Button } from '@/components/elements';
import { Test } from '@/components/screns';
import { EmptyState } from '@/components/ui';
import { invoices } from '@/constants';
import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';

export default async function InvoicesPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/');
  }
  // const invoices = null;

  return (
    <div className="flex size-full flex-col gap-6 overflow-scroll p-6">
      <Button onClick={signout}>Sign Out</Button>
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
