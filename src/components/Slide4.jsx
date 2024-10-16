import styles from "./slide4.module.css";

function Slide4() {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
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
        <div className={styles.form}>
          <h3 className={styles.heading}>Login</h3>
          <input
            className={styles.input}
            type="text"
            placeholder="UserName"
          ></input>
          <input
            className={styles.input}
            type="text"
            placeholder="Password"
          ></input>

          <a href="#" className={styles.link}>
            remember me
          </a>
          <button className={styles.btn}>Login</button>
          <a href="#" className={styles.link2}>
            Don’t have an account ? Register
          </a>
        </div>
      </div>
    </div>
  );
}

export default Slide4;
