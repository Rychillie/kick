import { Table as T } from '@/components/elements';

export default function TableHeader() {
  return (
    <T.TableHeader>
      <T.TableRow>
        <T.TableHead>Id</T.TableHead>
        <T.TableHead className="w-full">Name</T.TableHead>
        <T.TableHead className="min-w-[103px] text-left">Email</T.TableHead>
        <T.TableHead className="min-w-56 text-right">Address</T.TableHead>
      </T.TableRow>
    </T.TableHeader>
  );
}
