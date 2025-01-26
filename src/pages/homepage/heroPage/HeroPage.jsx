import React from "react";
import styles from "./HeroPage.module.css";
import Image from "../../../asset/image-mockups.png"
import Section from "../section/Section";


const Hero = () => {
    return (
        <div>
            <div className={styles.HeroPage}>
                <div className={styles.hero}>
                    <h1>Next generation <span>digital banking</span></h1>
                    <p>
                        Take your financial life online. Your Easybank account will be a
                        one-stop-shop for spending, saving, budgeting, investing, and much more.
                    </p>
                    <button className={styles.requestInvite}>Request Invite</button>
                </div>
                <div className={styles.heroImage}>
                    <img src={Image} alt={"logo"}/>
                </div>

            </div>
            <Section/>
        </div>

    );
};

export default Hero;