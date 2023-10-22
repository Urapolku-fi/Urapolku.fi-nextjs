import './socials.css';

import LinkedIn from '@/components/icons/LinkedIn';
import Facebook from '@/components/icons/Facebook';
import Instagram from '@/components/icons/Instagram';
import Twitter from '@/components/icons/Twitter';

export const Socials = () => {
  return (
    <div className="socials">
      <div className="social-links">
        <LinkedIn />
        <Facebook />
        <Instagram />
        <Twitter />
      </div>
    </div>
  );
};
