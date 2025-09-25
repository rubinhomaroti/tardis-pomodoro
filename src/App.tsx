import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { Button } from './components/Button';
import { TimerIcon } from 'lucide-react';
import { Container } from './components/Container';

export function App() {
  return (
    // Use <Fragment> / <> to allow export multiple HTML elements
    <>
      <Container>
        <Heading>
          TARDIS Pomodoro
          <Button>
            <TimerIcon />
          </Button>
        </Heading>
      </Container>
    </>
  );
}
