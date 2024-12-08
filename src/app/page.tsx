import { signin } from '@/actions';
import { Button, Text } from '@/components/elements';

export default function Home() {
  return (
    <div className="mb-24 flex size-full flex-col items-center justify-center gap-6 overflow-scroll p-6">
      <Text as="h1" weight="semibold" size="28">
        Hello world
      </Text>

      <Button onClick={signin}>Sign In with Google</Button>
    </div>
  );
}
