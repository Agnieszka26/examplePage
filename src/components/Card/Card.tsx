import { FC } from "react";
import Text from "../../atoms/Text/Text";
import ButtonTransparent from "../../atoms/ButtonTransparent/ButtonTransparent";
import styles from "./Card.module.scss";

interface CardProps {
  header: string;
  description: string;
  counter: string;
  icon: string;
  button: string;
}

const Card: FC<CardProps> = ({
  header,
  description,
  counter,
  icon,
  button,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__containerLeft}>
        <div className={styles.card__counter}>{counter}</div>
        <div className={styles.card__icon}>
          <img src={icon} alt={icon} />
        </div>
      </div>
      <div className={styles.card__containerRight}>
        <Text h4="h4" text={header} secondaryColor="secondaryColor" />
        <Text text={description} grayColor="grayColor" />
        <ButtonTransparent text={button} />
      </div>
    </div>
  );
};

export default Card;
