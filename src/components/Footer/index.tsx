import styles from './styles.module.css';

export function Footer() {
  return <footer className={styles.footer}>
    <a href="">Learn about Pomodoro technique</a>
    <a href="">TARDIS Pomodoro &copy; {new Date().getFullYear()} - Made with ❤️</a>
  </footer>;
}
