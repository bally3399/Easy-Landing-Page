import React from "react";
import styles from "../navbar/Navbar.module.css";
import Logo from "../../asset/logo.jpg"

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <img src={Logo} alt={"logo"}/>
            <ul className={styles.navLinks}>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
            <button className={styles.requestInvite}>Request Invite</button>
        </nav>
    );
};

export default Navbar;