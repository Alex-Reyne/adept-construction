import styles from './About.module.scss';

export const About = () => {
  return (
    <div id="about" className={styles.about__container}>
      <h1 className={styles.about__title}>Our Story</h1>
      <div className={styles.about__stories}>
        <div className={styles.about__story}>
          <h2 className={styles.about__head}>Beginnings</h2>
          <p className={styles.about__paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <div className={styles.about__story}>
          <h2 className={styles.about__head}>Middles</h2>
          <p className={styles.about__paragraph}>
            Egestas dui id ornare arcu odio ut sem. Ultrices sagittis orci a scelerisque. Libero id
            faucibus nisl tincidunt eget nullam. Rhoncus dolor purus non enim. Tempor nec feugiat
            nisl pretium fusce id velit ut tortor. Habitant morbi tristique senectus et netus. Magna
            sit amet purus gravida. At elementum eu facilisis sed odio. Posuere ac ut consequat
            semper viverra nam libero justo. Dictumst quisque sagittis purus sit. Magnis dis
            parturient montes nascetur ridiculus.
          </p>
        </div>
        <div className={styles.about__story}>
          <h2 className={styles.about__head}>Endings</h2>
          <p className={styles.about__paragraph}>
            Condimentum lacinia quis vel eros donec ac odio tempor orci. Sit amet mattis vulputate
            enim nulla aliquet porttitor lacus. At ultrices mi tempus imperdiet nulla malesuada
            pellentesque elit eget. Sed felis eget velit aliquet. Dis parturient montes nascetur
            ridiculus mus mauris vitae. Donec et odio pellentesque diam volutpat commodo sed egestas
            egestas. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat.
            Dignissim convallis aenean et tortor.
          </p>
        </div>
      </div>
    </div>
  );
};
