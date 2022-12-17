import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import "./Intercom.css"
import {btnDelete, btnDeleteOne, btnNumber} from "./intercomSlice";

const Intercom = () => {
  const dispatch = useDispatch();
  const intercomValue = useSelector((state: RootState) =>
    state.intercom.value
  );
  const intercomAsterisks = useSelector((state: RootState) =>
    state.intercom.asterisks
  );

  const pass = '2846';

  const passTrue = () => {
    if (intercomValue === pass) {
      return (
        <div className="passTrue">
          <h1>Pass is TRUE! Come in!</h1>
        </div>
      )
    } else if (intercomValue.length === 4 && intercomValue !== pass) {
      return (
        <div className="passFalse">
          <h1>Pass is False! Try again!</h1>
        </div>
      )
    } else {
      return (
        <div className="displayBox">
          <h1>{intercomAsterisks}</h1>
        </div>
      )
    }
  }

  return (
    <div className="bigBox">
      {passTrue()}
      <div className="numberBox">
        <button className="numberBtn" onClick={() => dispatch(btnNumber(7))}>7</button>
        <button className="numberBtn" onClick={() => dispatch(btnNumber(8))}>8</button>
        <button className="numberBtn" onClick={() => dispatch(btnNumber(9))}>9</button>
        <button className="numberBtn" onClick={() => dispatch(btnNumber(4))}>4</button>
        <button className="numberBtn" onClick={() => dispatch(btnNumber(5))}>5</button>
        <button className="numberBtn" onClick={() => dispatch(btnNumber(6))}>6</button>
        <button className="numberBtn" onClick={() => dispatch(btnNumber(1))}>1</button>
        <button className="numberBtn" onClick={() => dispatch(btnNumber(2))}>2</button>
        <button className="numberBtn" onClick={() => dispatch(btnNumber(3))}>3</button>
        <button className="numberBtn" onClick={() => dispatch(btnDeleteOne())}>{'<'}</button>
        <button className="numberBtn" onClick={() => dispatch(btnNumber(0))}>0</button>
        <button className="numberBtn" onClick={() => dispatch(btnDelete())}>E</button>
      </div>
    </div>
  );
};

export default Intercom;