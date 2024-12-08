import { Table as T } from '@/components/elements';
import type { Customers } from '@/types/customer';

export default function TableBody({ customers }: { customers?: Customers }) {
  if (!customers) {
    return (
      <T.TableBody>
        <T.TableRow>
          <T.TableCell colSpan={7} className="text-center">
            No customer found
          </T.TableCell>
        </T.TableRow>
      </T.TableBody>
    );
  }

  return (
    <T.TableBody>
      {customers.map((customer, i) => (
        <T.TableRow key={i}>
          <T.TableCell>{customer.id}</T.TableCell>
          <T.TableCell className="w-full">{customer.name}</T.TableCell>
          <T.TableCell className="min-w-[103px] text-left">
            {customer.email}
          </T.TableCell>
          <T.TableCell className="min-w-56 text-right">
            {customer.address ? customer.address : 'No address registered'}
          </T.TableCell>
        </T.TableRow>
      ))}
    </T.TableBody>
  );
}
