import { FC } from "react";

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import Button from "../../atoms/PrimaryButton/PrimaryButton";
import RoundButton from "../../atoms/RoundButton/RoundButton";
import Text from "../../atoms/Text/Text";

import styles from "./Header.module.scss";

const Header: FC = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.containerCenter}>
          <div>
            <Text text="We are Creative" h1="h1" align="center" />
            <Text
              text="and "
              secondPartTextColor="secondPartTextColor"
              secondPartText="Digital Agency"
              h1="h1"
              align="center"
            />
            <div style={{ padding: "10px 25%" }}>
              <Text
                h3="h3"
                text="There are many variations of passages of Lorem Ipsum available, but the
suffered alteration in some form, by injected humour  suffered alteration in
by injected humour majority "
                align="center"
              />
            </div>
            <div className={styles.buttonContainer}>
              <Button text="read more" secondary="secondary" />
              <Button text="services" />
            </div>
          </div>
        </div>
        <div className={styles.roundButtonsContainer}>
          <RoundButton innerElement={<MdArrowBackIosNew />} />
          <RoundButton innerElement={<MdArrowForwardIos />} />
        </div>
      </div>
    </>
  );
};

export default Header;
