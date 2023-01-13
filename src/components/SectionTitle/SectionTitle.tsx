import { FC } from "react";
import Text from "../../atoms/Text/Text";
import styles from "../SectionTitle/SectionTitle.module.scss";

interface SectionTitleProps {
  primaryColorTitle: string;
  bigHeader: string;
  smallerHeader: string;
}

const SectionTitle: FC<SectionTitleProps> = ({
  primaryColorTitle,
  bigHeader,
  smallerHeader,
}) => {
  return (
    <div className={styles.header}>
      <Text text={primaryColorTitle} h4="h4" primaryColor="primaryColor" />
      <Text text={bigHeader} h2="h2" secondaryColor="secondaryColor" />
      <Text text={smallerHeader} h3="h3" grayColor="grayColor" />
    </div>
  );
};

export default SectionTitle;
