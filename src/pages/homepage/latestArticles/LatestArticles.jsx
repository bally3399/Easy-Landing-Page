import React from "react";
import styles from "../latestArticles/LatestArticles.module.css";
import CurrencyImage from "../../../asset/image-currency.jpg";
import RestaurantImage from "../../../asset/image-restaurant.jpg"
import PlaneImage from "../../../asset/image-plane.jpg"
import Article1 from "../../../asset/image-confetti.jpg";

const LatestArticles = () => {
    const articles = [
        {
            title: "Receive money in any currency with no fees",
            author: "By Claire Robinson",
            description:
                "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
            image: CurrencyImage,
        },
        {
            title: "Treat yourself without worrying about money",
            author: "By Wilson Hutton",
            description:
                "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
            image: RestaurantImage,
        },
        {
            title: "Take your Easybank card wherever you go",
            author: "By Wilson Hutton",
            description:
                "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
            image: PlaneImage,
        },
        {
            title: "Our invite-only Beta accounts are now live!",
            author: "By Claire Robinson",
            description:
                "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...",
            image: Article1,
        },
    ];

    return (
        <section className={styles.latestArticles}>
            <h2>Latest Articles</h2>
            <div className={styles.articles}>
                {articles.map((article, index) => (
                    <div key={index} className={styles.articleCard}>
                        <img src={article.image} alt={article.title} />
                        <h3>{article.title}</h3>
                        <p>{article.author}</p>
                        <p>{article.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default LatestArticles;