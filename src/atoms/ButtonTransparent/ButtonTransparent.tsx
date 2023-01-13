import { FC } from "react";
import styles from "./ButtonTransparent.module.scss";

interface ButtonTransparentProps {
  text: string;
}

const ButtonTransparent: FC<ButtonTransparentProps> = ({ text }) => {
  return <button className={styles.transparentButton}>{text} &gt;&gt; </button>;
};

export default ButtonTransparent;
