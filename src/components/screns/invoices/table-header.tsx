import { Table as T } from '@/components/elements';

export default function TableHeader() {
  return (
    <T.TableHeader>
      <T.TableRow>
        <T.TableHead>Due date</T.TableHead>
        <T.TableHead className="w-full min-w-56">Customer</T.TableHead>
        <T.TableHead className="text-right">Invoice no.</T.TableHead>
        <T.TableHead className="text-right">Invoice date</T.TableHead>
        <T.TableHead className="text-right">Amount</T.TableHead>
      </T.TableRow>
    </T.TableHeader>
  );
}
