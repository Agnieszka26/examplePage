import SectionTitle from "../../components/SectionTitle/SectionTitle";

import RoundButton from "../../atoms/RoundButton/RoundButton";

import Logo1 from "../../assets/icons/logos/Logo1.js";
import Logo2 from "../../assets/icons/logos/Logo2.js";
import Logo3 from "../../assets/icons/logos/Logo3.js";
import Logo5 from "../../assets/icons/logos/Logo5.js";
import Logo4 from "../../assets/icons/logos/Logo3.js";
import Logo6 from "../../assets/icons/logos/Logo6.js";

import { titles } from "./content";

import styles from "./OurClients.module.scss";
import ButtonsLeftRight from "../../components/ButtonsLeftRight/ButtonsLeftRight";

const OurClients = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <SectionTitle
          primaryColorTitle={titles.primaryColorTitle}
          bigHeader={titles.bigHeader}
          smallerHeader={titles.smallerHeader}
          align="left"
        />
      </div>
      <div className={styles.box}>
        <div>
          <ButtonsLeftRight
            color="darker"
            onClickLeft={function (): void {
              throw new Error("Function not implemented.");
            }}
            onClickRight={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
          <div className={styles.logos}>
            <Logo1 />
            <Logo2 />
            <Logo3 />
            <Logo4 />
            <Logo5 />
            <Logo6 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
