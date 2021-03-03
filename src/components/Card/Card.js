import React, { useState } from "react";
import styles from "./Card.module.css";
import CardHeader from "./CardHeader/CardHeader";
import CardContent from "./CardContent/CardContent";
import CardProfile from "./CardProfile/CardProfile";

const content = [
  {
    id: 1,
    image: "group.svg",
    title: "Specification 01",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    image: "path.svg",
    title: "Specification 02",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    image: "payment.svg",
    title: "Specification 03",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Card = () => {
  const [contentId, setContentId] = useState(3);

  const clickedContent = (id) => {
    setContentId(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <CardHeader />
        <div className={styles.cardContentContainer}>
          {content.map((item) => {
            let showContent = false;
            if (contentId === item.id) {
              showContent = true;
            }
            return (
              <CardContent
                key={item.id}
                data={item}
                onClickedContent={clickedContent}
                showContent={showContent}
              />
            );
          })}
        </div>
        <CardProfile />
      </div>
    </div>
  );
};

export default Card;
