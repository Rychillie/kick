import { Text } from '@/components/elements';

export default function CreateInvoicePage() {
  return (
    <div className="flex size-full flex-col gap-6 overflow-scroll p-6">
      <div className='flex size-full flex-row overflow-hidden rounded-xl border border-transparents-400 p-4'>
        <div className='flex-1'>
          <Text weight='semibold'>Invoice details</Text>
        </div>

        <div className='flex-1'>
          <Text weight='semibold'>Preview</Text>
        </div>
      </div>
    </div>
  );
}
