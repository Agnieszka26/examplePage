import cn from "classnames";
import { BsFillPatchCheckFill } from "react-icons/bs";
import variables from "../../assets/styles/variables.module.scss";

import Video from "../../atoms/Video/Video";
import Text from "../../atoms/Text/Text";
import shape from "../../assets/icons/rectangle2.svg";

import styles from "./AboutUs.module.scss";
import Button from "../../atoms/PrimaryButton/PrimaryButton";

const superlatives = [
  "There are many variations of passages of Lorem Ipsum available.",
  "Passages of Lorem Ipsum available.",
  "Many variations of passages of Lorem Ipsum available",
  "Variations of passages of Lorem Ipsum available",
];

const AboutUs = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={cn(styles.conatiner__half, styles.positionRelative)}>
          <img
            className={cn(styles.conatiner__image, styles.positionAbsoluteUp)}
            src={shape}
            alt="szary kwadrat"
          />
          <div className={styles.positionAbsoluteDown}>
            <Video url="https://www.youtube.com/watch?v=F96T0_M-078" />
          </div>
        </div>
        <div className={styles.conatiner__half}>
          <Text primaryColor={"primaryColor"} text={"About Us"} h4="h4" />

          <Text
            text="Aliquam id est ullamcorper dictu arcu sed"
            secondPartText=" Your Business"
            secondPartTextColor="secondPartTextColor"
            h2="h2"
            primaryColor={"secondaryColor"}
          />

          <Text
            primaryColor={"grayColor"}
            text={
              "There are many variations of passages of Lorem Ipsum available, but the some suffered alteration in some form, by injected humour  suffered alteration in by injected humour majority "
            }
          />
          {superlatives.map((i) => {
            return (
              <span className={styles.textWithIcon}>
                <BsFillPatchCheckFill color={variables.primaryColor} />
                <Text primaryColor={"secondaryColor"} text={i} key={i} />
              </span>
            );
          })}
          <div>
            <Button text={"read more"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
