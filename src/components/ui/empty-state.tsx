import { Button, Text } from '@/components/elements';

type EmptyStateProps = {
  title: string;
  description: string;
  buttonText: string;
};

export default function EmptyState({
  title,
  description,
  buttonText
}: EmptyStateProps) {
  return (
    <div className="mx-auto flex size-full max-w-80 flex-col items-center justify-center gap-6 pb-24">
      <div className="flex flex-col gap-3 text-center">
        <Text as="h1" weight="semibold" size="24">
          {title}
        </Text>
        <Text size="16-24" className="text-neutral-600 dark:text-neutral-300">
          {description}
        </Text>
      </div>

      <Button size="base" className="w-full max-w-64">
        {buttonText}
      </Button>
    </div>
  );
}
