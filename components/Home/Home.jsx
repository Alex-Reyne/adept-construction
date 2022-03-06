import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div id="home" className={styles.home__container}>
      <div style={styles.brand}>
        <h1>Adept Construction</h1>
        <h2>Adept Construction</h2>
        <a href="#about">
          <button>About Us</button>
        </a>
        <a href="#contact">
          <button>Contact</button>
        </a>
      </div>
    </div>
  );
};
