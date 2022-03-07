import styles from './Navbar.module.scss';

export const Navbar = () => {
  return (
    <nav className={styles.navbar__container}>
      <h1 className={styles.navbar__logo}>Adept</h1>
      <div className={styles.navbar__links}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#values">Values</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};
