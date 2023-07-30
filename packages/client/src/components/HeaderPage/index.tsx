import { Typography } from '@root/ui/common/Typography';
import { View } from '@universal-labs/primitives';
import clsx from 'clsx';

export interface HeaderPageProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function HeaderPage({ className, title, subtitle }: HeaderPageProps) {
  return (
    <View className={clsx(className)}>
      <Typography variant='h4' className={clsx('!font-bold')}>
        {title}
      </Typography>
      <Typography variant='subtitle1' className={clsx('text-slate-700')}>
        {subtitle}
      </Typography>
    </View>
  );
}
