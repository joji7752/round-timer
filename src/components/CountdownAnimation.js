import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingContext } from "../context/SettingsContext";

const CountdownAnimation = ({
  key = 1,
  timer = 20,
  animate = true,
  children,
}) => {
  const { stopTimer } = useContext(SettingContext);

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      size={230}
      duration={timer * 60}
      colors={[["#0033C4", 0.33]]}
      strokeWidth={70}
      trailColor="#eeeeee"
      onComplete={() => {
        stopTimer();
      }}
    >
      {/* {children} */}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
