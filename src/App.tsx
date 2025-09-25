import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Logo } from './components/Logo';

export function App() {
  return (
    // Use <Fragment> / <> to allow export multiple HTML elements
    <>
      <Container>
        <Logo />
      </Container>
    </>
  );
}
