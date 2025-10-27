import styles from './styles.module.css';

export function Logo() {
  return (
    <div className={styles.logo}>
      <a className={styles.logoLink} href='#'>
        <img
          className={styles.logoImage}
          src='/tardis.png'
          alt='TARDIS Pomodoro'
        />
        <span>TARDIS</span>
        <span>Pomodoro</span>
      </a>
    </div>
  );
}
