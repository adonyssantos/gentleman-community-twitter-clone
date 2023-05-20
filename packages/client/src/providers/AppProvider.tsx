import { Button } from '@root/ui/common/Button';
import { TextInput } from '@root/ui/forms/TextInput/TextInput';
import { H1, P, View } from '@universal-labs/primitives';
import { useForm } from 'react-hook-form';

interface IAppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: IAppProviderProps) {
  // TODO: Add React Query Provider
  const form = useForm({
    defaultValues: {
      name: 'test',
    },
  });

  return (
    <View className='m-5 flex-1'>
      <H1>Hello Gentleman Community!!</H1>
      <TextInput label='Name' className='my-4' control={form.control} formField='name' />
      <Button intent='primary' size='medium'>
        <P>Boton</P>
      </Button>
      <P>adfsdafasfsfd</P>
      {children}
    </View>
  );
}
