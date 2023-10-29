'use client';

import styles from './page.module.css';

import { useEffect } from 'react';
import getObserver from '@/components/animations/observer';
import { default as cm } from '@/lib/classMerge';

export default function Page() {
  useEffect(() => {
    const elements = document.querySelectorAll('.' + styles.hidden);
    const observer = getObserver(styles.show);
    elements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      <section id={styles.s2} className={styles.hidden}>
        <div id={styles.heroStack}>
          <div className={styles.smallContainer}>
            <div className={cm(styles.titleSection, styles.hidden)}>
              <div className={styles.pill}>
                <p>Kaikki työpaikat - ja myös niiden palkat</p>
              </div>
              <div className={cm(styles.content, styles.hidden)}>
                <h1>Yhdellä haulla urapolulta löydät kaikki avoimet työpaikat.</h1>
                <div className={styles.paragraphWrapper}>
                  <p>
                    Urapolku on työnetsimisalusta, joka tarjoaa sinulle nopean ja tehokkaan tavan
                    löytää juuri sinulle sopivia työpaikkoja.
                  </p>
                </div>
              </div>
              <div className={styles.actions}>
                <button className={styles.download}>Rekisteröidy</button>
                <button className={styles.openJobs}>Avoimet työpaikat</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={styles.s3} className={styles.hidden}>
        <div id={styles.content}>
          <div className={styles.video}>
            <img src={'/pictures/video.png'} alt="" />
          </div>
        </div>
      </section>
      <section id={styles.s4} className={styles.hidden}>
        <div id={styles.middleSection}>
          <div className={styles.middleSectionTitle}>
            <div className={styles.middleTitleWrapper}>
              <h2>Teemme uran löytämisestä sinulle helpompaa!</h2>
            </div>
            <p>
              Check out our amazing features and experience the power of Vaultflow for yourself.
            </p>
          </div>
        </div>
        <div className={styles.middleSectionColumns}>
          <div className={styles.middleSectionColumn}>
            <div className={styles.middleSectionCardWrapper}>
              <div className={styles.middleSectionIconWrapper}>
                <img src="/pictures/Urapolku_AI_logo.png" alt="" />
              </div>
              <div className={styles.middleSectionCardContent}>
                <h2>Urapolku AI</h2>
                <p>
                  Urapolku AI on innovatiivinen työkalu, joka auttaa sinua löytämään oikean urapolun
                  hyödyntämällä tekoälyä. Urapolun avulla voit saada yksilöllisiä ja räätälöityjä
                  suosituksia, jotka perustuvat vastaamasi 20 eri kysymykseen tulokseen. Vastausten
                  avulla Urapolku AI arvioi kykyjäsi, kiinnostuksen kohteitasi ja tavoitteitasi
                  urasi suhteen. Urapolku AI on suunniteltu auttamaan kaikkia, jotka haluavat löytää
                  itselleen sopivan urapolun.
                </p>
              </div>
              <div className={styles.middleSectionButton}>
                <button>Lue lisää</button>
              </div>
            </div>
          </div>
          <div className={styles.middleSectionColumn}>
            <div className={styles.middleSectionCardWrapper}>
              <div className={styles.middleSectionIconWrapper}>
                <img src={'/pictures/Digital-image.png'} alt="" />
              </div>
              <div className={styles.middleSectionCardContent}>
                <h2>Digital Credit Tokens</h2>
                <p>
                  Reward your customers and incentivize engagement with our innovative digital
                  credit tokens. Our tokens can be customized to match your branding, and are a
                  flexible and scalable way to drive customer loyalty and encourage repeat business.
                </p>
              </div>
              <div className={styles.middleSectionButton}>
                <button>View dashboard</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id={styles.s5} className={styles.hidden}>
        <div id={styles.lowerContainer}>
          <div className={styles.lowerContainerContent}>
            <h2>Tietoa Urapolusta</h2>
            <p>
              Etsitpä sitten töitä tai haluat löytää uusia työntekijöitä, me tarjoamme sinulle
              innovatiivisen ratkaisun löytää juuri sen mitä etsit: olipa kyseessä sitten uusi
              työpaikka, taitava osaaja, suunnanmuutos, unelmatyön tavoittelu tai vaikka kesätyö.
              Urapolullta löydät suuren valikoiman avoimia työpaikkoja, parhaat vinkit työnhakuun ja
              kiehtovimmat tarinat työelämän koukeroista.
            </p>
            <button>Rekisteröidy</button>
          </div>
        </div>
      </section>
      <section id={styles.s6} className={styles.hidden}>
        <div id={styles.footer}>
          <div className={styles.footerContainer}>
            <div className={styles.footer_3columns}>
              <div className={styles.footerFirstColumn}>
                <div className={styles.footerLinkWrapper}>
                  <h2>Contact</h2>
                </div>
                <div className={styles.footerLinks}>
                  <p>Work inquires: work@vaultflow.com</p>
                  <p>PR and speaking: press@vaultflow.com</p>
                  <p>New business: newbusiness@vaultflow.com</p>
                </div>
                <div className={styles.footerLinkWrapperCareer}>
                  <h2>Careers</h2>
                  <p>Careers@waitflow.com</p>
                </div>
                <p>© 2023 Urapolku. All Rights Reserved.</p>
              </div>
              <div className={styles.footerSecondColumn}>
                <div className={styles.footerSecondLinkWrapper}>
                  <h2>Address</h2>
                  <div className={styles.footerAddressWrapper}>
                    <p>398 11th Street, Floor 2 San Francisco, CA 94103</p>
                  </div>
                </div>
                <div className={styles.footerSecondLinkWrapper}>
                  <h2>Socials</h2>
                  <div className={styles.footerSocials}>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Tik Tok</p>
                  </div>
                </div>
              </div>
              <div className={styles.footerThirdColumn}>
                <div className={styles.footerLogoWrapper}>
                  <div className={styles.footerLogo}>
                    <img src={'/pictures/urapolku.png'} alt="" />
                    <h2>Urapolku</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
