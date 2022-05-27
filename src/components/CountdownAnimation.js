import React from "react";
import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../context/SettingsContext";

const CountdownAnimation = ({ keyState, timer, animate, children }) => {
  const { stopAnimate } = useContext(SettingsContext);

  return (
    <CountdownCircleTimer
      key={keyState}
      isPlaying={animate}
      size={260}
      duration={timer * 60}
      colors={["#23049D", "#AA2EE6", "#FF79CD", "#FFDF6B"]}
      strokeWidth={60}
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
