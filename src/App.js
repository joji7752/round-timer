import { CountdownCircleTimer } from "react-countdown-circle-timer";
import SetPomodoro from "./components/SetPomodoro";
import logo from "./logo.svg";
import styled from "styled-components";
import { useContext } from "react";
import { SettingContext } from "./context/SettingsContext";
import Button from "./components/Button";
import CountdownAnimation from "./components/CountdownAnimation";

const Small = styled.small`
  font-size: 1rem;
  padding: 30px 0px 0px 0px;
  margin-bottom: -15px;
  display: block;
`;

function App() {
  const {
    pomodoro,
    executing,
    setCurrentTimer,
    SettingBtn,
    children,
    startAnimate,
    startTimer,
    pauseTimer,
  } = useContext(SettingContext);

  return (
    <div className="container">
      <img src={logo} className="App-logo" alt="logo" />
      <Small>집중하고 싶은 사람들을 위한</Small>
      <h1>Round-Timer</h1>
      {pomodoro !== 0 ? (
        <SetPomodoro />
      ) : (
        <>
          <ul className="labels">
            <li>
              <Button
                title="Work"
                activeClass={executing.active === "work" && "active-label"}
                _callback={() => {
                  setCurrentTimer("work");
                }}
              />
              <Button
                title="break"
                activeClass={executing.active === "break" && "active-label"}
                _callback={() => {
                  setCurrentTimer("break");
                }}
              />
            </li>
          </ul>
          <Button title="Settings" _callback={SettingBtn} />
          <div className="time-container">
            <div className="time-wrapper">
              <div className="time-spot">1</div>
              <div className="time-spot">
                <span></span>
              </div>
              <div className="time-spot">3</div>
              <div className="time-spot">
                <span></span>
              </div>
              <CountdownAnimation>
                key={pomodoro}
                timer={pomodoro}
                animate={startAnimate}
                {children}
              </CountdownAnimation>
              <div className="time-spot">
                <span></span>
              </div>
              <div className="time-spot">7</div>
              <div className="time-spot">
                <span></span>
              </div>
              <div className="time-spot">9</div>
            </div>
          </div>
          <div className="button-wrapper">
            <Button
              title="Start"
              className={!startAnimate && "active"}
              _callback={startTimer}
            />
            <Button
              title="Pause"
              className={startAnimate && "active"}
              _callback={pauseTimer}
            />
          </div>
        </>
      )}
      {/* <CountdownCircleTimer /> */}
    </div>
  );
}

export default App;
