import { FaFacebook, FaTwitter, FaDiscord, FaLinkedin } from "react-icons/fa";

import React from "react";
import styles from "../footer/Footer.module.css";
import Logo from "../../asset/logo.jpg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            {/* Grid 1: Logo and social links */}
            <div>
                <img src={Logo} alt={"logo"} />
                <div className={styles.socialLinks}>
                    <FaDiscord />
                    <FaTwitter />
                    <FaLinkedin />
                    <FaFacebook />
                </div>
            </div>

            {/* Grid 2: About links */}
            <ul className={styles.footerLinks}>
                <div>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </div>
            </ul>

            {/* Grid 3: Other links */}
            <ul className={styles.footerLinks}>
                <div>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>
                </div>
            </ul>

            <div>
                <button className={styles.requestInvite}>Request Invite</button>
                <p>© Easybank. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
