import React from "react";
import { createContext, useState } from "react";

export const SettingsContext = createContext();

function SettingsContextProvider(props) {
  const [pomodoro, setPomodoro] = useState(0);
  const [keyState, setKeyState] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  function setCurrentTimer(active_state) {
    updateExecute({
      ...executing,
      active: active_state,
    });
    setTimerTime(executing);
  }

  // start animation
  function startTimer() {
    setStartAnimate(true);
    console.log("keyState222222222::::", keyState);
  }
  // pause animation fn
  function pauseTimer() {
    setStartAnimate(false);
    console.log("keyState111111111::::", keyState);
  }

  const children = ({ remainingTime }) => {
    let hours = Math.floor(remainingTime / 3600);
    let minutes = Math.floor((remainingTime % 3600) / 60);
    let seconds = remainingTime % 60;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${hours}:${minutes}:${seconds}`;
  };

  const SettingBtn = () => {
    setExecuting({});
    setPomodoro(0);
  };

  //실행
  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  };

  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case "work":
        setKeyState(0);
        setPomodoro(evaluate.work);
        break;
      case "rest":
        setKeyState(1);
        setPomodoro(evaluate.rest);
        break;
      default:
        setPomodoro(0);
        break;
    }
  };

  function stopAnimate() {
    setStartAnimate(false);
  }

  return (
    <SettingsContext.Provider
      value={{
        pomodoro,
        executing,
        updateExecute,
        startAnimate,
        startTimer,
        pauseTimer,
        children,
        SettingBtn,
        setCurrentTimer,
        stopAnimate,
        keyState,
      }}
    >
      {props.children}
    </SettingsContext.Provider>
  );
}

export default SettingsContextProvider;
