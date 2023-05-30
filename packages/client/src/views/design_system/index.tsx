import { Button } from '@root/ui/common/Button';
import { Typography } from '@root/ui/common/Typography';
import { TextInput } from '@root/ui/forms/TextInput';
import { Avatar } from '@root/ui/images/Avatar';
import { BlackLogo } from '@root/ui/images/Logo/BlackLogo';
import { ColorLogo } from '@root/ui/images/Logo/ColorLogo';
import { WhiteLogo } from '@root/ui/images/Logo/WhiteLogo';
import { P, View } from '@universal-labs/primitives';
import { useForm } from 'react-hook-form';

export function DesignSystemView() {
  const form = useForm({
    defaultValues: {
      name: '',
      password: '',
    },
  });

  return (
    <View className='m-auto max-w-lg flex-1 p-5'>
      <Typography variant='h1'>Design System</Typography>
      <Typography variant='h2'>Common</Typography>
      <Typography variant='h3'>Buttons</Typography>
      <Button>
        <P>Text Button</P>
      </Button>
      <Button variant='contained'>
        <P>Contained Button</P>
      </Button>
      <Button variant='outlined'>
        <P>Outlined Button</P>
      </Button>

      <Typography variant='h3'>Forms</Typography>
      <TextInput label='Name' className='my-4' control={form.control} formField='name' />
      <TextInput
        label='Password'
        className='my-4'
        control={form.control}
        formField='password'
        secureTextEntry
      />
      <Typography variant='h3'>Typography</Typography>
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
      <Typography variant='h3'>Images</Typography>
      <Typography variant='h4'>Avatar</Typography>
      <Avatar
        alt=''
        source={{
          uri: 'https://avatars.githubusercontent.com/u/58638286?v=4',
        }}
      />
      <Avatar
        alt=''
        source={{
          uri: 'https://avatars.githubusercontent.com/u/58638286?v=4',
        }}
        variant='rounded'
      />
      <Avatar
        alt=''
        source={{
          uri: 'https://avatars.githubusercontent.com/u/58638286?v=4',
        }}
        variant='square'
      />
      <Avatar alt='Adonys Santos' variant='square' />
      <Typography variant='h4'>Logo</Typography>
      <ColorLogo size='large' />
      <WhiteLogo size='large' className='bg-black' />
      <BlackLogo size='large' className='bg-white' />
    </View>
  );
}
