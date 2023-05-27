import { Button } from '@root/ui/common/Button';
import { Typography } from '@root/ui/common/Typography';
import { TextInput } from '@root/ui/forms/TextInput/TextInput';
import { H1, H2, H3, P, View } from '@universal-labs/primitives';
import { useForm } from 'react-hook-form';

export function DesignSystemView() {
  const form = useForm({
    defaultValues: {
      name: '',
      password: '',
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
      <TextInput
        label='Password'
        className='my-4'
        control={form.control}
        formField='password'
        secureTextEntry
      />
      <Typography variant='h1'>h1</Typography>
      <Typography variant='h2'>h2</Typography>
      <Typography variant='h3'>h3</Typography>
      <Typography variant='h4'>h4</Typography>
      <Typography variant='h5'>h5</Typography>
      <Typography variant='h6'>h6</Typography>
      <Typography variant='subtitle1'>title</Typography>
      <Typography variant='subtitle2'>subtitle</Typography>
      <Typography>body1(Default)</Typography>
      <Typography variant='body2'>body2</Typography>
      <Typography variant='caption'>caption2</Typography>
      <Typography variant='overline'>overline</Typography>
    </View>
  );
}
