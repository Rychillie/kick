import { Input, Text } from '@/components/elements';

export default function CreateInvoicePage() {
  return (
    <div className="flex size-full flex-col gap-6 overflow-scroll p-6">
      <div className="flex size-full flex-row overflow-hidden rounded-xl">
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Text weight="semibold">Invoice details</Text>

          <div className="flex flex-col gap-3">
            <Input height="base" placeholder="INV-0001" className="w-full" />
            <Input height="base" placeholder="Customer" className="w-full" />
          </div>
        </div>

        <div className="flex size-full max-w-2xl flex-col gap-4 p-4">
          <Text className="text-center" weight="semibold">
            Preview
          </Text>

          <div className="size-full rounded-xl border border-gray-100 bg-white"></div>
        </div>
      </div>
    </div>
  );
}
