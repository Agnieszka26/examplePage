import styles from "./Tile.module.scss";
import Text from "../../atoms/Text/Text";
import { FC } from "react";

interface TileProps {
  icon: string;
  cypher: string;
  title: string;
}

const Tile: FC<TileProps> = ({ icon, cypher, title }) => {
  return (
    <>
      <div className={styles.tile}>
        <div className={styles.center}>
          <img src={icon} alt={icon} />
        </div>
        <div className={styles.center}>
          <Text text={cypher} h2="h2" secondaryColor="secondaryColor" />
        </div>
        <div className={styles.center}>
          <Text text={title} grayColor="grayColor" />
        </div>
      </div>
    </>
  );
};

export default Tile;
