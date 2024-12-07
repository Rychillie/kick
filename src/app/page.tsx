import { Test } from '@/components/screns';

export default function Home() {
  return (
    <div className="flex size-full flex-col gap-6 overflow-scroll p-6">
      <Test.Filters />

      <Test.Table />
    </div>
  );
}
