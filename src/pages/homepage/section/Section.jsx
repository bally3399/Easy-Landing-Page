import React from "react";
import styles from "../section/Section.module.css";
import Image1 from "../../../asset/icon-online.svg"
import Image2 from "../../../asset/icon-budgeting.svg"
import Image3 from "../../../asset/icon-onboarding.svg"
import Image4 from "../../../asset/icon-api.svg"

const Section = () => {
    const features = [

        {
            image: Image1,
            title: "Online Banking",
            description:
                "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
        },
        {
            image: Image2,
            title: "Simple Budgeting",
            description:
                "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
        },
        {
            image: Image3,
            title: "Fast Onboarding",
            description:
                "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
        },
        {
            image: Image4,
            title: "Open API",
            description:
                "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
        },
    ];

    return (
        <section className={styles.section}>
            <h2>Why choose Easybank?</h2>
            <p>
                We leverage Open Banking to turn your bank account into your financial hub.<span>Control your finances like never before.</span>

            </p>
            <div className={styles.features}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.featureCard}>
                        <img src={feature.image} alt={feature.title} />
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Section;
