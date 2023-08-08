import { ColorLogo } from '@root/ui/images/Logo/ColorLogo';
import { Container } from '../Container';

export function Header() {
  return (
    <Container className='items-center justify-center'>
      <ColorLogo size='small' />
    </Container>
  );
}
