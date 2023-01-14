import { FC } from "react";
import cn from "classnames";
import styles from "./Text.module.scss";

interface IText {
  h1?: string;
  h2?: string;
  h3?: string;
  h4?: string;
  h5?: string;
  h6?: string;
  paragraf?: string;
  smallText?: string;
  text: string;
  align?: string;
  secondPartText?: string;
  primaryColor?: string;
  secondaryColor?: string;
  secondPartTextColor?: string;
  grayColor?: string;
}

const Text: FC<IText> = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  paragraf,
  smallText,
  align,
  text,
  secondPartText,
  primaryColor,
  secondaryColor,
  secondPartTextColor,
  grayColor,
}) => {
  return (
    <p className={cn(styles.base, styles[`align-${align}`])}>
      <span
        className={cn(
          styles.p,
          styles[`hasType-${h1}`],
          styles[`hasType-${h2}`],
          styles[`hasType-${h3}`],
          styles[`hasType-${h4}`],
          styles[`hasType-${h5}`],
          styles[`hasType-${h6}`],
          styles[`hasType-${paragraf}`],
          styles[`hasColor-${primaryColor}`],
          styles[`hasColor-${secondaryColor}`],
          styles[`hasColor-${grayColor}`]
        )}
      >
        {text}
      </span>
      <span
        className={cn(
          styles.p,
          styles[`hasType-${h1}`],
          styles[`hasType-${h2}`],
          styles[`hasType-${h3}`],
          styles[`hasType-${h4}`],
          styles[`hasType-${h5}`],
          styles[`hasType-${h6}`],
          styles[`hasType-${paragraf}`],
          styles[`hasType-${secondPartTextColor}`]
        )}
      >
        {secondPartText}
      </span>
    </p>
  );
};
export default Text;
