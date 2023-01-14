import styles from "./CardPeople.module.scss";
import Text from "../../atoms/Text/Text";
import { FC } from "react";

interface CardPeopleProps {
  name: string;
  jobTitile: string;
  image: string;
}

const CardPeople: FC<CardPeopleProps> = ({ name, jobTitile, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img src={image} alt="profile" />
        <div className={styles.cardSocialIcons}></div>
      </div>
      <div className={styles.cardBody}>
        <Text text={name} />
        <Text text={jobTitile} />
      </div>
    </div>
  );
};

export default CardPeople;
