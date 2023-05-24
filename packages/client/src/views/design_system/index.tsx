import { Button } from '@root/ui/common/Button';
import { TextInput } from '@root/ui/forms/TextInput/TextInput';
import { H1, H2, H3, P, View } from '@universal-labs/primitives';
import { useForm } from 'react-hook-form';

export function DesignSystemView() {
  const form = useForm({
    defaultValues: {
      name: '',
    },
  });

  return (
    <View className='m-5 flex-1'>
      <H1>Design System</H1>
      <H2>Common</H2>
      <H3>Buttons</H3>
      <Button>
        <P>Text Button</P>
      </Button>
      <Button variant='contained'>
        <P>Contained Button</P>
      </Button>
      <Button variant='outlined'>
        <P>Outlined Button</P>
      </Button>

      <H2>Forms</H2>
      <TextInput label='Name' className='my-4' control={form.control} formField='name' />
    </View>
  );
}
