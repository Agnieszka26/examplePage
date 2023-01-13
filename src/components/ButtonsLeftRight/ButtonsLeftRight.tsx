import { FC } from "react";
import cn from "classnames";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import RoundButton from "../../atoms/RoundButton/RoundButton";
import styles from "./ButtonsLeftRight.module.scss";

interface ButtonsLeftRightProps {
  onClickLeft: () => void;
  onClickRight: () => void;
  color?: "darker";
}

const ButtonsLeftRight: FC<ButtonsLeftRightProps> = ({
  onClickLeft,
  onClickRight,
  color,
}) => {
  return (
    <div className={cn(styles.roundButtonsContainer, styles[`color-${color}`])}>
      <RoundButton onClick={onClickLeft} innerElement={<MdArrowBackIosNew />} />
      <RoundButton
        onClick={onClickRight}
        innerElement={<MdArrowForwardIos />}
      />
    </div>
  );
};

export default ButtonsLeftRight;
