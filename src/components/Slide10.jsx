import styles from "./slide10.module.css";

function Slide10() {
  return (
    <div className={styles.container}>
      <span className={styles.logoArea}>
        <img
          className={styles.logo}
          src="https://i.imgur.com/791uIme.jpeg"
          alt="logo"
        ></img>
        <p className={styles.logoName}>Krishisetu</p>
      </span>

      <div className={styles.content}>
        {/*left side*/}
        <div className={styles.sidebar}>
          <div className={styles.profile}>
            <img
              src="https://plus.unsplash.com/premium_photo-1682092016074-b136e1acb26e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZmFybWVyfGVufDB8fDB8fHww"
              alt="Profile"
              className={styles.profileImage}
            />
            <h3 className={styles.name}>Vijay Salve</h3>
            <p>vijaysalve45@gmail.com</p>
          </div>
          <button className={styles.btn}>Dashboard</button>

          <div className={styles.menu}>
            <p>Dashboard</p>
            <p>Crops</p>
            <p>KYC Verification</p>
            <p>Weather Forecast</p>
            <p>Insurance</p>
            <p>Contract Overview</p>
          </div>
        </div>

        {/*right side*/}

        <div className={styles.statGrid}>
          <div className={styles.statGrid1}>
            <div className={styles.statBox1}>
              Total Acres <br></br> of Farmland
              <img
                src="https://www.shutterstock.com/image-photo/beautiful-view-green-farm-field-260nw-2470800699.jpg"
                height="50px"
                className={styles.farmland}
              ></img>
            </div>
            <div className={styles.statBox2}>
              Crop <br></br> Recommendation{" "}
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92VT63muHcBjg6GZyhAbCV1SmVt0BxuzFxA&s"
                height="50px"
              ></img>
            </div>
            <div className={styles.statBox3}>
              KYC Verification <br></br> Status
              <img
                src="https://media.istockphoto.com/id/919118254/vector/check-mark-logo-vector-or-icon.jpg?s=612x612&w=0&k=20&c=K2y_bMzP74NfPtxo8xcG2Vi3eT4GwF1aUAeIUPEio3E="
                height="60px"
              ></img>
            </div>
          </div>
          <div className={styles.statGrid2}>
            <div className={styles.statBox4}>
              {" "}
              Crop Yield Statistics
              <br></br>
              <div>
                {" "}
                <img
                  src="https://www.divadhvik.com/wp-content/uploads/2024/05/Sensex-to-Nifty-930x620.png"
                  height="120px"
                ></img>
                <img
                  src="https://www.conceptdraw.com/How-To-Guide/picture/bar-diagram-problem-solving-manufacturing.png"
                  height="150px"
                ></img>
              </div>
            </div>
            <div className={styles.statBox5}>
              <div className={styles.contract}>
                Contracts <br></br> Overview
                <img
                  src="https://img.freepik.com/free-vector/business-man-shaking-hands-signed-contract_3446-646.jpg"
                  height="50px"
                  width="100px"
                ></img>
              </div>

              <div className={styles.contract}>
                {" "}
                <p>
                  <span className={styles.active}>3</span>
                  <br></br>Active
                </p>
                <p>
                  <span className={styles.pending}>2</span> <br></br>Pending
                </p>
              </div>
            </div>
          </div>

          <div className={styles.statGrid3}>
            <div className={styles.statBox6}>
              {" "}
              <div className={styles.insurance}>
                Insurance <br></br> Overview
                <img
                  src="https://img.freepik.com/premium-vector/insurance-policy-concept-data-secure-vector-cartoon-illustration_650087-552.jpg"
                  height="50px"
                  width="100px"
                ></img>
              </div>
              <div className={styles.contract}>
                <p>
                  {" "}
                  <img
                    src="https://media.istockphoto.com/id/919118254/vector/check-mark-logo-vector-or-icon.jpg?s=612x612&w=0&k=20&c=K2y_bMzP74NfPtxo8xcG2Vi3eT4GwF1aUAeIUPEio3E="
                    height="110px"
                    className={styles.activeimg}
                  ></img>{" "}
                  <br></br>
                  <span className={styles.act}> Active</span>
                </p>
                <p>
                  <span className={styles.active}>3</span>
                  <br></br>
                  Policies
                </p>
              </div>
            </div>
            <div className={styles.statBox7}>
              Crop Distribution
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB5-W12wTaPx--7lT-7X_k-gq-wyebxz_N7g&s"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide10;
