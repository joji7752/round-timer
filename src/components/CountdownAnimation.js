import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../context/SettingsContext";

const CountdownAnimation = ({ key, timer, animate, children }) => {
  const { stopAnimate } = useContext(SettingsContext);

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      size={260}
      duration={timer * 60}
      colors={[
        ["#23049D", 0.3],
        ["#AA2EE6", 0.3],
        ["#FF79CD", 0.3],
        ["#FFDF6B", 0.3],
      ]}
      strokeWidth={64}
      trailColor="#eeeeee"
      onComplete={() => {
        stopAnimate();
      }}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default CountdownAnimation;
