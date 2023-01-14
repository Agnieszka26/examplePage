import Tile from "../../components/Tile/Tile";
import { content } from "./content";

import styles from "./Features.module.scss";

const Features = () => {
  return (
    <div className={styles.features}>
      {content.map(({ icon, cypher, title }) => {
        return <Tile key={cypher} icon={icon} cypher={cypher} title={title} />;
      })}
    </div>
  );
};

export default Features;
