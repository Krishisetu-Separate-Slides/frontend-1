import styles from "./slide1.module.css";

function Slide1() {
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
            <a href="" className={styles.navbarContent}>
              CONTACT US
            </a>
            <a href="#" className={styles.navbarContent}>
              LOG IN
            </a>
          </span>
        </div>
      </div>

      <div className={styles.Content}>
        <div className={styles.leftcontent}>
          <p className={styles.head}>Connecting Framers directly with Buyers</p>
          <pre className={styles.pre}>Fair prices, smarter farming</pre>
          <span className={styles.btn}>
            <button className={styles.button}>Sign up as Farmer</button>
            <button className={styles.button}>Sign up as Buyer</button>
          </span>
          <button className={styles.button2}>Marketplace</button>
        </div>
        <div className={styles.slidePart}>
          <div className={styles.slides}>
            <img
              src="https://media.istockphoto.com/id/503646746/photo/farmer-spreading-fertilizer-in-the-field-wheat.jpg?s=612x612&w=0&k=20&c=Lgxsjbz0jaYyQrvfzhyAsW2zELtshRP4AtLzkpmcLiE="
              alt="Image 1"
              className={styles.img1}
            />
          </div>
          <div className={styles.midslides}>
            <img
              src="https://img.freepik.com/premium-photo/indian-farmer-field_75648-189.jpg"
              alt="Image 2"
              className={styles.img1}
            />
          </div>
          <div className={styles.slides}>
            <img
              src="https://media.istockphoto.com/id/503646746/photo/farmer-spreading-fertilizer-in-the-field-wheat.jpg?s=612x612&w=0&k=20&c=Lgxsjbz0jaYyQrvfzhyAsW2zELtshRP4AtLzkpmcLiE="
              alt="Image 3"
              className={styles.img1}
            />
          </div>
        </div>
      </div>

      <div className={styles.foot}>
        <p className={styles.footerConter}>Partner:</p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b3/Razorpay_logo.webp"
          alt=""
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Odoo_logo_rgb.svg/800px-Odoo_logo_rgb.svg.png"
          alt=""
        />
        <img
          src="https://cdn.worldvectorlogo.com/logos/freshdesk-logo.svg"
          alt=""
        />
        <img
          src="https://cdn.prod.website-files.com/5ee732bebd9839b494ff27cd/5ee732bebd98395aa0ff2815_paypal-logo-preview.webp"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmfgJWwCtSjwRlFXIc48h7rl0a_N-pobjmw&s"
          alt=""
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2NgUXVSPwY6lb8jwhhRKL_8j39IVyWJskA&s"
          alt=""
        />
      </div>
    </div>
  );
}

export default Slide1;
