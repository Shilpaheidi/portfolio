import React from 'react';
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import '../styles/Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <a href="https://instagram.com/shilpa__heidi?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><InstagramIcon /></a>
                <a href="https://twitter.com/Shilpa_Acharya7?t=gtVYUeRVgzN_jbMPbpxVoQ&s=09"><TwitterIcon /></a>
                <a href="https://www.facebook.com/profile.php?id=100022209933297&mibextid=D4KYlr"><FacebookIcon /></a>
                <a href="https://www.linkedin.com/in/shilpa-heidi-02338b193"><LinkedInIcon /></a>
            </div>
            <p>
                &copy; 2023 pedrotech.com
            </p>
        </div>
    );
}

export default Footer;
