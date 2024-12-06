import { Button } from '@/components/elements';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <h1 className="text-2xl font-bold">Under development</h1>

      <div className="flex gap-3">
        <Button intent="tertiary" className="w-fit" disabled size="lg">
          Button
        </Button>
        <Button intent="tertiary" className="w-fit" icon="document" size="lg">
          Button
        </Button>
        <Button
          intent="tertiary"
          className="w-fit"
          icon="document"
          size="lg"
          iconPosition="right"
        >
          Button
        </Button>
        <Button
          intent="tertiary"
          className="w-fit"
          icon="actions"
          size="lg"
          onlyIcon
        />
      </div>
    </div>
  );
}
