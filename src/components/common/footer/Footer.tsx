import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerColumns}>
          <div className={styles.footerColumn}>
            <div className={styles.footerLinksWrapper}>
              <div className={styles.contact}>Contact</div>
              <div className={styles.footerLinks}>
                <div className={styles.workInquiresWorkvaultflow}>
                  Work inquires: work@vaultflow.com
                </div>
                <div className={styles.workInquiresWorkvaultflow}>
                  PR and speaking: press@vaultflow.com
                </div>
                <div className={styles.workInquiresWorkvaultflow}>
                  New business: newbusiness@vaultflow.com
                </div>
              </div>
            </div>
            <div className={styles.footerLinksWrapper1}>
              <div className={styles.careers}>Careers</div>
              <div className={styles.careersvaultflowcom}>Careers@vaultflow.com</div>
            </div>
            <div className={styles.vaultflowAllRights}>© 2023 Vaultflow. All Rights Reserved.</div>
          </div>
          <div className={styles.footerColumn}>
            <div className={styles.footerLinksWrapper}>
              <div className={styles.contact}>Address</div>
              <div className={styles.addressWrapper}>
                <div className={styles.thStreetFloorContainer}>
                  <p className={styles.thStreetFloor}>398 11th Street, Floor 2</p>
                  <p className={styles.thStreetFloor}>San Francisco, CA 94103</p>
                </div>
              </div>
            </div>
            <div className={styles.footerLinksWrapper}>
              <div className={styles.careers}>Social</div>
              <div className={styles.footerLinks}>
                <div className={styles.twitter}>Twitter</div>
                <div className={styles.twitter}>Instagram</div>
                <div className={styles.twitter}>Tik Tok</div>
              </div>
            </div>
          </div>
          <div className={styles.footerColumn2}>
            <div className={styles.logoWrapper}>
              <div className={styles.logo}>
                <img className={styles.valtflowIcon} alt="" src={'/pictures/urapolku.png'} />
                <b className={styles.urapolku}>Urapolku</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
