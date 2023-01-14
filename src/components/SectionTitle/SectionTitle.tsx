import { FC } from "react";
import cn from "classnames";
import Text from "../../atoms/Text/Text";
import styles from "../SectionTitle/SectionTitle.module.scss";

interface SectionTitleProps {
  primaryColorTitle: string;
  bigHeader: string;
  smallerHeader: string;
  align?: "left";
  smallerHeaderDarker?: boolean;
}

const SectionTitle: FC<SectionTitleProps> = ({
  primaryColorTitle,
  bigHeader,
  smallerHeader,
  align,
  smallerHeaderDarker,
}) => {
  return (
    <div className={cn(styles.header, styles[`align-${align}`])}>
      <Text text={primaryColorTitle} h4="h4" primaryColor="primaryColor" />
      <Text text={bigHeader} h2="h2" secondaryColor="secondaryColor" />
      {smallerHeaderDarker ? (
        <Text text={smallerHeader} h3="h3" secondaryColor="secondaryColor" />
      ) : (
        <Text text={smallerHeader} h3="h3" grayColor="grayColor" />
      )}
    </div>
  );
};

export default SectionTitle;
