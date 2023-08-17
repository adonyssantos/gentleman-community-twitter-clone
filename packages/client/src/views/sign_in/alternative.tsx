import { useAuthContext } from '@root/client/context/auth.context';
import { useI18n } from '@root/client/hooks/useI18n';
import { useZodForm } from '@root/client/hooks/useZodForm';
import { Button } from '@root/ui/common/Button';
import { Divider } from '@root/ui/common/Divider';
import { TextInput } from '@root/ui/forms/TextInput';
import { BrandGithubIcon } from '@root/ui/icons/BrandGithubIcon';
import { BrandGoogleIcon } from '@root/ui/icons/BrandGoogleIcon';
import { View } from '@universal-labs/primitives';
import { z } from 'zod';

type AlternativeProps = {
  email: string;
};

const Alternative = ({ email }: AlternativeProps) => {
  const { t } = useI18n(['signin']);

  const schema = z.object({
    alternative_email: z.string().email(),
    alternative_password: z.string().min(8),
  });

  type Schema = z.infer<typeof schema>;

  const form = useZodForm({
    schema: schema,
    defaultValues: {
      alternative_email: email,
    },
  });

  const auth = useAuthContext();

  const onSubmit = (data: Schema) =>
    auth?.login({ email: data.alternative_email, password: data.alternative_password });
  return (
    <View className='flex flex-col'>
      <View className='flex flex-col gap-2'>
        <Button variant='outlined' startIcon={<BrandGoogleIcon />}>
          {t('with_google')}
        </Button>
        <Button variant='outlined' startIcon={<BrandGithubIcon />}>
          {t('with_gitHub')}
        </Button>
      </View>
      <Divider>{t('or')}</Divider>
      <View className='flex flex-col gap-2'>
        <TextInput
          label={t('alternative_email')}
          control={form.control}
          formField='alternative_email'
          editable={false}
        />
        <TextInput
          label={t('alternative_password')}
          control={form.control}
          formField='alternative_password'
        />

        <Button variant='contained' onPress={form.handleSubmit(onSubmit)}>
          {t('submit')}
        </Button>

        <Button variant='outlined'>{t('forgot_password')}</Button>
      </View>
    </View>
  );
};

export default Alternative;
