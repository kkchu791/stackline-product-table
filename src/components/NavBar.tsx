import styles from './NavBar.module.scss';
import logo from '../stackline_logo.svg';

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <img
        src={logo}
        className={styles.logo}
        alt="logo"
      />
    </nav>
  );
};

export default NavBar;