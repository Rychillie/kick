import { Button, Text } from '@/components/elements';

export default function Home() {
  return (
    <main className="flex size-full flex-col justify-end gap-6 px-8 py-20 lg:p-20">
      <Text
        as="h1"
        weight="semibold"
        size="28"
        className="text-center lg:text-left"
      >
        Hello world
      </Text>

      <Button icon="google" className="lg:w-fit" size="lg">
        Sign In with Google
      </Button>
    </main>
  );
}
