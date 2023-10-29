import styles from './socials.module.css';

import LinkedIn from '@/components/icons/LinkedIn';
import Facebook from '@/components/icons/Facebook';
import Instagram from '@/components/icons/Instagram';
import Twitter from '@/components/icons/Twitter';

export const Socials = () => {
  return (
    <div className={styles.socials}>
      <div className={styles.socialLinks}>
        <LinkedIn />
        <Facebook />
        <Instagram />
        <Twitter />
      </div>
    </div>
  );
};
