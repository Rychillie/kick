import c from 'clsx';

type SeparatorProps = {
  vertical: boolean;
  className?: string;
};

export default function Separator({
  vertical = false,
  className
}: SeparatorProps) {
  return (
    <hr
      className={c(
        'border-none bg-transparents-300 dark:bg-neutral-800',
        vertical ? 'h-full min-h-4 w-px' : 'h-px w-full min-w-4',
        className
      )}
    />
  );
}
