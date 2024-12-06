import { Button, Input } from '@/components/elements';

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-6 overflow-scroll p-6">
      <div className="flex items-center justify-between rounded-xl border border-transparents-400 p-4">
        <div className='flex items-center justify-center gap-3'>
          <Input placeholder="Username" />
          <Button intent='secondary'>Add filter</Button>
        </div>

        <div className='flex items-center justify-center gap-3'>
          <Button intent='secondary'>5 entities</Button>
          <Button>Create Invoice</Button>
        </div>
      </div>

      <div className='flex h-screen w-full items-center justify-between rounded-xl border border-transparents-400 p-4'>

      </div>
    </div>
  );
}
