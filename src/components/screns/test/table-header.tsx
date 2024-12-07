import { Checkbox, Table as T } from '@/components/elements';

export default function TableHeader() {
  return (
    <T.TableHeader>
      <T.TableRow>
        <T.TableHead
          role="checkbox"
          className="flex w-fit items-center justify-center"
        >
          <Checkbox />
        </T.TableHead>
        <T.TableHead>Due date</T.TableHead>
        <T.TableHead className="min-w-[103px]">Status</T.TableHead>
        <T.TableHead className="w-full min-w-56">Customer</T.TableHead>
        <T.TableHead className="text-right">Invoice no.</T.TableHead>
        <T.TableHead className="text-right">Invoice date</T.TableHead>
        <T.TableHead className="text-right">Amount</T.TableHead>
      </T.TableRow>
    </T.TableHeader>
  );
}
