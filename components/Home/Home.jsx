import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div id="home" className={styles.home__container}>
      <div className={styles.home__overlay}></div>
      <div className={styles.home__content}>
        <div className={styles.home__brand}>
          <h1 className={styles.title}>Adept Construction</h1>
          <h2 className={styles.subtitle}>Building homes for families</h2>
        </div>
        <div className={styles.home__buttons}>
          <a href="#about">
            <button>About Us</button>
          </a>
          <a id={styles.home__contact_button} href="#contact">
            <button>Contact</button>
          </a>
        </div>
      </div>
    </div>
  );
};
