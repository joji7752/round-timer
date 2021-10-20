import { createContext, useState } from "react";

export const SettingContext = createContext();

const SettingsContextProvider = (props) => {
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  function setCurrentTimer(active_state) {
    updateExecute({
      ...executing,
      active: active_state,
    });
    setTimertime(executing);
  }

  // start animation fn
  function startTimer() {
    setStartAnimate(true);
  }
  // pause animation fn
  function pauseTimer() {
    setStartAnimate(false);
  }

  function stopTimer() {
    setStartAnimate(false);
  }

  const SettingBtn = () => {
    setExecuting({});
    setPomodoro(0);
  };
  //실행
  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings);
    setTimertime(updatedSettings);
  };

  const setTimertime = (evaluate) => {
    switch (evaluate.active) {
      case "work":
        setPomodoro(evaluate.work);
        break;

      case "break":
        setPomodoro(evaluate.break);
        break;

      default:
        setPomodoro(0);
        break;
    }
  };

  const children = ({ remainingTime }) => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <SettingContext.Provider
      value={{
        stopTimer,
        updateExecute,
        executing,
        pomodoro,
        startAnimate,
        startTimer,
        pauseTimer,
        SettingBtn,
        setCurrentTimer,
        children,
      }}
    >
      {props.children}
    </SettingContext.Provider>
  );
};

export default SettingsContextProvider;
