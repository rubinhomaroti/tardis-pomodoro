import { Container } from '../../components/Container';
import { GenericHtml } from '../../components/GenericHtml';
import { Heading } from '../../components/Heading';
import { MainTemplate } from '../../templates/MainTemplate';

export function AboutPomodoro() {
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>The Pomodoro Technique 🍅</Heading>

          <p>
            The Pomodoro Technique is a productivity methodology created by{' '}
            <strong>Francesco Cirillo</strong>. It consists of breaking work
            into time blocks (the famous “Pomodoros”) separated by breaks. The
            goal is to keep total focus for a short period and make sure you
            rest enough to avoid mental fatigue.
          </p>

          <img src='https://placehold.co/1920x1080' alt='' />

          <h2>How does the traditional Pomodoro work?</h2>
          <ul>
            <li>
              <strong>1. Choose a task</strong> you want to complete.
            </li>
            <li>
              <strong>2. Work on it for 25 minutes</strong> without
              interruptions.
            </li>
            <li>
              <strong>3. Take a short 5-minute break</strong>.
            </li>
            <li>
              <strong>4. Every 4 cycles, take a long break</strong> (usually 15
              to 30 minutes).
            </li>
          </ul>

          <h2>
            But <strong>Chronos Pomodoro</strong> has a special twist 🚀
          </h2>

          <p>
            Our app follows the original concept but adds tweaks and
            personalizations to make the process even more efficient:
          </p>

          <h3>⚙️ Time customization</h3>
          <p>
            You can configure focus time, short breaks, and long breaks any way
            you like! Just head to the <a href='/settings'>settings page</a> and
            adjust the minutes however you prefer.
          </p>

          <h3>🔁 Cycles organized in sequence</h3>
          <p>
            Every time you finish a cycle, a new task is automatically added to
            your history, and the app already suggests the next cycle (focus or
            break).
          </p>
          <p>
            <strong>Our default:</strong>
          </p>
          <ul>
            <li>
              <strong>Odd</strong> cycles: Work (focus).
            </li>
            <li>
              <strong>Even</strong> cycles: Short break.
            </li>
            <li>
              Cycle <strong>8</strong>: Special long break to reset the entire
              round.
            </li>
          </ul>

          <h3>🍅 Cycle visualization</h3>
          <p>
            Right under the timer you’ll find colored dots representing each
            cycle:
          </p>
          <ul>
            <li>🟡 Yellow: Work cycle (focus).</li>
            <li>🟢 Green: Short break.</li>
            <li>🔵 Blue: Long break (appears every 8 cycles).</li>
          </ul>

          <p>
            That way you always know where you are in the process and what comes
            next. No more jotting things down or doing the math in your head!
          </p>

          <h3>📊 Automatic history</h3>
          <p>
            All your tasks and finished cycles are saved in the{' '}
            <a href='/history'>history</a> with completed or interrupted status.
            That way you can track your progress over time.
          </p>

          <h2>Why use Chronos Pomodoro?</h2>
          <ul>
            <li>✅ Organize your focus with clarity.</li>
            <li>✅ Work and rest in the right measure.</li>
            <li>✅ Personalize your own cycles and durations.</li>
            <li>✅ Track your history automatically.</li>
          </ul>

          <p>
            <strong>Ready to focus?</strong> Let’s{' '}
            <a href='/'>head back to the home page</a> and start those
            Pomodoros! 🍅🚀
          </p>

          <p>
            <em>"Total focus, no rush, no pause, just go!"</em> 💪🧘‍♂️
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}
