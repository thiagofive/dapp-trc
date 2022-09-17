import styles from "@styles/Home.module.css";

const About = () => {
  return (
    <div id="about">
      <div className={styles.container}>
        <main className={styles.mainPadding}>
          <h1 className={styles.blueTitle}>About</h1>
          <div className={styles.content}>
            <p className={styles.description}>
              {`What are Airplanes? Airplanes are unique NFTs that live out around the world.`}
              <br />
              <br />
              {`Owning a non-fungible airplane is the perfect way to show your friends and family how much you love, live, and breath crypto. With this project, you can buy, sell, and trade virtual baes that represent nothing more than 32 x 32 pixels on a screen.  So what are you waiting for? Share some love by minting a Airplane.`}
            </p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
