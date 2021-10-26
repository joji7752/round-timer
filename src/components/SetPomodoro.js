import React, { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { SettingsContext } from "../context/SettingsContext";
import Button from "./Button";

const showAnimate = keyframes`
    0% {
      opacity: 0;
      
    }
    100% {
      opacity: 1;
      transform: translateY(-150px);
    }
  `;

const Div = styled.div`
  opacity: 0;
  animation: ${showAnimate} 1s infinite;
  animation-iteration-count: 1;
  animation-delay: 3s;
  animation-fill-mode: forwards;
`;

const SetPomodoro = () => {
  const { updateExecute } = useContext(SettingsContext);
  const [newTimer, setNewTimer] = useState({
    //default value
    work: 0, //0 second
    break: 0,
    active: "work",
  });

  const handleChange = (input) => {
    const { name, value } = input.target;
    let valueNanToZero = value || 0;
    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(valueNanToZero),
        });
        break;
      case "rest":
        setNewTimer({
          ...newTimer,
          break: parseInt(valueNanToZero),
        });
        break;

      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateExecute(newTimer);
    // console.log(newTimer);
  };
  return (
    <Div className="form-container">
      <form noValidate onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="work">
            집중시간
            <input
              className="input"
              name="work"
              onChange={handleChange}
              value={newTimer.work}
              id="work"
            />
            분
          </label>
          <br />
          <br />
          <lable htmlFor="rest">
            휴식시간
            <input
              className="input"
              name="rest"
              onChange={handleChange}
              value={newTimer.break}
              id="rest"
            />
            분
          </lable>
        </div>
        <Button title="Set Timer" _callback={handleSubmit} />
      </form>
    </Div>
  );
};

export default SetPomodoro;
