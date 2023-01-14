import ReactPlayer from "react-player";
import { FC } from "react";

import playButton from "../../assets/icons/playButton.svg";
import backgroundForVideo from "../../assets/images/rectangle_1196.png";
import styles from "./Video.module.scss";

interface VideoProps {
  url: string;
}

const Video: FC<VideoProps> = ({ url }) => {
  console.log(playButton);
  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        className={styles.reactPlayer}
        width="100%"
        height="100%"
        playing
        url={url}
        light={backgroundForVideo}
        playIcon={<img src={playButton} alt="play icon" />}
      />
    </div>
  );
};

export default Video;
