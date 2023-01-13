import { FC, ReactNode } from "react";
import styles from "./RoundButton.module.scss";

interface RoundButtonProps {
  innerElement: string | ReactNode;
}

const RoundButton: FC<RoundButtonProps> = ({ innerElement }) => {
  return (
    <button className={styles.roundButton}>
      <span className={styles.innerElement}>{innerElement}</span>
    </button>
  );
};

export default RoundButton;
