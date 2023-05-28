import { Span } from '@universal-labs/primitives';
import clsx from 'clsx';

export interface AvatarLetterProps {
  text: string;
  backgroundColor: string;
  className?: string;
}

export function AvatarLetter({ text, backgroundColor, className }: AvatarLetterProps) {
  return (
    <Span
      className={clsx(
        'flex flex-1 items-center justify-center',
        'select-none text-2xl uppercase text-white',
        className,
      )}
      style={{ backgroundColor }}
    >
      {text}
    </Span>
  );
}
