import styles from "./slide7.module.css";

function Slide7() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.logoArea}>
          <img
            className={styles.logo}
            src="https://i.imgur.com/791uIme.jpeg"
            alt="logo"
          ></img>
          <p className={styles.logoName}>Krishisetu</p>
        </span>
        <span className={styles.Nav}>
          <a href="#" className={styles.navbarContent}>
            ABOUT US
          </a>
          <a href="#" className={styles.navbarContent}>
            FEATURES
          </a>
          <a href="#" className={styles.navbarContent}>
            TESTIMONIALS
          </a>
          <a href="#" className={styles.navbarContent}>
            SUBSCRIPTION
          </a>
          <a href="#" className={styles.navbarContent}>
            CONTACT US
          </a>
          <a href="#" className={styles.navbarContent}>
            LOG IN
          </a>
        </span>
      </div>

      <h1 className={styles.heading}>Farmers & Buyers Love Us!</h1>

      <div className={styles.content}>
        {/* first box */}
        <div className={styles.smallBox}>
          <div className={styles.circle1}></div>
          <h2 className={styles.h2}>Farmer</h2>
          <p className={styles.para}>
            Thanks to AgriSecure's AI- driven crop recommendations, I’ve been
            able to choose the right crops based on market demand and weather.
            My profits have increased significantly!" – Vikram Singh
          </p>
        </div>

        {/* second box */}

        <div className={styles.BigBox}>
          <div className={styles.circle2}></div>
          <h2 className={styles.h2}>Farmer</h2>
          <p className={styles.para}>
            "AgriSecure has transformed the way I sell my crops. The direct
            connection with buyers has ensured I get a fair price every time!" –
            Ramesh Kumar
          </p>
        </div>

        {/* third box */}

        <div className={styles.smallBox}>
          <div className={styles.circle1}></div>
          <h2 className={styles.h2}>Buyer</h2>
          <p className={styles.para}>
            As a buyer, I appreciate the transparency and secure payments on
            AgriSecure. It’s simplified our procurement process and built trust
            with farmers." – Sunita Sharma
          </p>
        </div>
      </div>
    </div>
  );
}

export default Slide7;
