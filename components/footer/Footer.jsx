import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div id="foot">
          <p>Daniel Chiquete</p>
          <div id="socials">
            <a href="https://www.linkedin.com/in/daniel-c-b8b58525a/">
              {/* <i class="fa-brands fa-linkedin" /> */}
            </a>
          </div>  
        </div>
      </footer>

    </>
    // <div className={styles.container}>
    //   <div>©2023 West-MEC Coding Program. All rights reserved.</div>
    //   <div className={styles.social}>
    //     <Image src="/1.png" width={15} height={15} className={styles.icon} alt="West-MEC Facebook Account" />
    //     <Image src="/2.png" width={15} height={15} className={styles.icon} alt="West-MEC" />
    //     <Image src="/3.png" width={15} height={15} className={styles.icon} alt="West-MEC" />
    //     <Image src="/4.png" width={15} height={15} className={styles.icon} alt="West-MEC" />
    //   </div>
    // </div>
  );
};

export default Footer;
