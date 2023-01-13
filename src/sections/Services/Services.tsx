import Card from "../../components/Card/Card";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { content, titles } from "./content";

import styles from "./Services.module.scss";

const Services = () => {
  return (
    <>
      <SectionTitle
        primaryColorTitle={titles.primaryColorTitle}
        bigHeader={titles.bigHeader}
        smallerHeader={titles.smallerHeader}
      />
      <div className={styles.container}>
        {content.map(({ header, description, counter, icon, button }) => {
          return (
            <Card
              header={header}
              description={description}
              counter={counter}
              icon={icon}
              button={button}
              key={counter}
            />
          );
        })}
      </div>
    </>
  );
};

export default Services;
