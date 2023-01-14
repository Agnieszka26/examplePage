import { FC } from "react";
import Text from "../../atoms/Text/Text";

import styles from "./TileBlank.module.scss";

interface TitleBlankProps {
  title: string;
  description: string;
}

const TileBlank: FC<TitleBlankProps> = ({ title, description }) => {
  return (
    <div className={styles.tileBlank}>
      <div className={styles.box}>
        <Text h2="h2" text={title} />
        <Text text={description} />
      </div>
    </div>
  );
};

export default TileBlank;
