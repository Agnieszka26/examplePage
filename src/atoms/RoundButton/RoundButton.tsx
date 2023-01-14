import { FC, ReactNode } from "react";
import styles from "./RoundButton.module.scss";

interface RoundButtonProps {
  innerElement: string | ReactNode;
  onClick?: () => void;
}

const RoundButton: FC<RoundButtonProps> = ({ innerElement, onClick }) => {
  return (
    <button className={styles.roundButton} onClick={onClick}>
      <span className={styles.innerElement}>{innerElement}</span>
    </button>
  );
};

export default RoundButton;
