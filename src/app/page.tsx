import { Button, Input } from '@/components/elements';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-bold">Under development</h1>

      <div className="flex gap-3">
        <Input placeholder="Username" />
        <Input placeholder="Account" icon="accounts" />
        <Button size='lg' icon='bank' intent='action' iconPosition='right'>Submit</Button>
      </div>
    </div>
  );
}
