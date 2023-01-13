import SectionTitle from "../../components/SectionTitle/SectionTitle";
import TileBlank from "../../components/TileBlank/TileBlank";

import { titles, navElements, tiles } from "./content";

import styles from "./OurPortfolio.module.scss";

const OurPortfolio = () => {
  return (
    <div>
      <SectionTitle
        primaryColorTitle={titles.primaryColorTitle}
        bigHeader={titles.bigHeader}
        smallerHeader={titles.smallerHeader}
      />
      <div className={styles.container}>
        <div className={styles.nav}>
          {navElements.map((i) => {
            return (
              <div key={i} className={styles.navElements}>
                {i}
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.container}>
        {tiles.map(({ title, description }) => {
          return <TileBlank title={title} description={description} />;
        })}
      </div>
    </div>
  );
};

export default OurPortfolio;
