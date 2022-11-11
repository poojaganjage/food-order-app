import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
          <TwitterIcon />
          <InstagramIcon />
          <FacebookIcon />
          <LinkedInIcon />
        </div>
        <p>&copy; 2022 IndianFood.com</p>
    </div>
  );
}
export default Footer;
