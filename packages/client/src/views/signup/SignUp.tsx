import { zodResolver } from '@hookform/resolvers/zod';
import { singupSchema } from '@root/shared/src/validators/singup.nodel';
import { Button } from '@root/ui/common/Button';
import { Typography } from '@root/ui/common/Typography';
import { TextInput } from '@root/ui/forms/TextInput';
import { View } from '@universal-labs/primitives';
import { useForm } from 'react-hook-form';

export function SignUpView() {
  const form = useForm({
    defaultValues: { name: '', email: '' },
    resolver: zodResolver(singupSchema),
    mode: 'onChange',
  });
  const onSubmit = form.handleSubmit((values) => {
    values.name;
  });
  return (
    <View className='flex h-screen items-center justify-center '>
      <View className='flex w-[500px] gap-4'>
        <Typography variant={'h2'} className='text-3xl font-bold'>
          Create your account
        </Typography>
        <TextInput control={form.control} formField='name' label='Name' />
        <TextInput control={form.control} formField='email' label='Email' />
        <Typography variant={'subtitle1'} className='font-bold'>
          Date of birth
        </Typography>
        <Typography variant={'body1'} className='text-gray-600'>
          This will not be shown publicly. Confirm your own age, even if this account is for a
          business, a pet, or something else.
        </Typography>
        <View className='mt-16 flex items-center justify-center'>
          <Button className='flex h-14 w-[80%] bg-gray-400'>Next</Button>
        </View>
      </View>
    </View>
  );
}
