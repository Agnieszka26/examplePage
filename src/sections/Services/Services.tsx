import { FC } from "react";

import Button from "../../atoms/PrimaryButton/PrimaryButton";

import Text from "../../atoms/Text/Text";
import Card from "../../components/Card/Card";
import { content } from "./content";

import styles from "./Services.module.scss";

const Services = () => {
  return (
    <>
      <div className={styles.header}>
        <Text text="Services" h4="h4" primaryColor="primaryColor" />
        <Text
          text="We Provide Best Creative Services."
          h2="h2"
          secondaryColor="secondaryColor"
        />

        <Text
          text="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't"
          h3="h3"
          grayColor="grayColor"
        />
      </div>
      <div className={styles.container}>
        {content.map(({ header, description, counter, icon, button }) => {
          return (
            <Card
              header={header}
              description={description}
              counter={counter}
              icon={icon}
              button={button}
            />
          );
        })}
      </div>
    </>
  );
};

export default Services;
