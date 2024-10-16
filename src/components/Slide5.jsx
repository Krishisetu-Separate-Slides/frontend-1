import styles from "./slide5.module.css";

function Slide5() {
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
            <p>Krishisetu</p>
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
          <h3 className={styles.heading}>Contact Us</h3>
          <input
            className={styles.input}
            type="text"
            placeholder="UserName"
          ></input>
          <input
            className={styles.input}
            type="number"
            placeholder="Phone"
          ></input>
          <input
            className={styles.input}
            type="text"
            placeholder="Email"
          ></input>
          <textarea
            className={styles.textarea}
            type="meassage"
            placeholder="meassage"
            cols="30"
            rows="4"
          ></textarea>
          <button className={styles.btn}>Login</button>
        </div>
      </div>

      <div className={styles.lower}>
        <span className={styles.FootNav}>
          <a className={styles.navbarContent1} href="#">
            {" "}
            About
          </a>
          <a className={styles.navbarContent1} href="#">
            Contact
          </a>
          <a className={styles.navbarContent1} href="#">
            Term & Condition
          </a>
          <a className={styles.navbarContent1} href="#">
            Privacy policy
          </a>
        </span>
        <span className={styles.media}>
          <a href="https://twitter.com/">
            <img
              src="https://img.freepik.com/premium-photo/twitter-logo-icon-illustration-vector_895118-5886.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1727740800&semt=ais_hybrid"
              alt="twitter icon"
              width="40px"
              height="40px"
              target="blank"
            ></img>
          </a>
          <a href="https://instagram.com/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1200px-Instagram_icon.png"
              alt="insta icon"
              width="40px"
              height="40px"
              target="blank"
            ></img>
          </a>
          <a href="https://facebook.com/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQKrFhY-ljA-u7J5IMWeTv8zmpBx4PP9nQMw&s"
              alt="facebook icon"
              width="40px"
              height="40px"
              target="blank"
            ></img>
          </a>
          <a href="https://linkedin.com/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
              alt="linkedin icon"
              width="40px"
              height="40px"
              target="blank"
            ></img>
          </a>
        </span>
        <span className={styles.footer}>
          <p>© All rights reserved by krishisetu</p>
        </span>
      </div>
    </div>
  );
}

export default Slide5;
