import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(
    () => (localStorage.getItem('theme') as AvailableThemes) || 'dark',
  );

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,) {
    event.preventDefault();
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark')
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        title='Home'
        aria-label='Go to Home page'
      >
        <HouseIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        title='History'
        aria-label='Go to History page'
      >
        <HistoryIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        title='Settings'
        aria-label='Go to Settings page'
      >
        <SettingsIcon />
      </a>

      <a
        className={styles.menuLink}
        href='#'
        title='Theme'
        aria-label='Switch app theme'
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}
