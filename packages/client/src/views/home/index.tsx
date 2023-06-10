import { useI18n } from '@root/client/hooks/useI18n';
import { useLanguages } from '@root/client/hooks/useLanguages';
import { Button } from '@root/ui/common/Button';
import { Typography } from '@root/ui/common/Typography';
import { View } from '@universal-labs/primitives';

export function HomeView() {
  const { t } = useI18n(['common']);
  const { changeLanguage, currentLanguage } = useLanguages();

  return (
    <View>
      <Typography>{t('common:hello')}</Typography>
      <Button onPress={() => changeLanguage('en')}>
        <Typography>English</Typography>
      </Button>
      <Button onPress={() => changeLanguage('es')}>
        <Typography>Spanish</Typography>
      </Button>
      <Typography>{currentLanguage}</Typography>
    </View>
  );
}
