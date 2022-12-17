import React from 'react';
import "./Calculator.css";
import {btnCalkDelete, btnCalkDeleteOne, btnCalkNumber, btnEquals} from "./calculatorSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";

const Calculator = () => {
  const dispatch = useDispatch();
  const calculatorNumber = useSelector((state: RootState) =>
    state.calculator.number
  )

  return (
    <div className="bigBox">
      <div className="displayBox">
        <h1>{calculatorNumber}</h1>
      </div>
      <div className="calkBox">
        <div className="numberBox">
          <button className="numberBtn" onClick={() => dispatch(btnCalkNumber(7))}>7</button>
          <button className="numberBtn" onClick={() => dispatch(btnCalkNumber(8))}>8</button>
          <button className="numberBtn" onClick={() => dispatch(btnCalkNumber(9))}>9</button>
          <button className="numberBtn" onClick={() => dispatch(btnCalkNumber(4))}>4</button>
          <button className="numberBtn" onClick={() => dispatch(btnCalkNumber(5))}>5</button>
          <button className="numberBtn" onClick={() => dispatch(btnCalkNumber(6))}>6</button>
          <button className="numberBtn" onClick={() => dispatch(btnCalkNumber(1))}>1</button>
          <button className="numberBtn" onClick={() => dispatch(btnCalkNumber(2))}>2</button>
          <button className="numberBtn" onClick={() => dispatch(btnCalkNumber(3))}>3</button>
          <button className="numberBtn" onClick={() => dispatch(btnCalkDeleteOne())}>{'<'}</button>
          <button className="numberBtn" onClick={() => dispatch(btnCalkNumber(0))}>0</button>
          <button className="numberBtn" onClick={() => dispatch(btnCalkDelete())}>E</button>
        </div>
        <div  className="calkBoxMini">
          <button className="numberBtn" onClick={() => dispatch(btnCalkNumber('+'))}>+</button>
          <button className="numberBtn" onClick={() => dispatch(btnCalkNumber('-'))}>-</button>
          <button className="numberBtn" onClick={() => dispatch(btnCalkNumber('*'))}>*</button>
          <button className="numberBtn" onClick={() => dispatch(btnCalkNumber('/'))}>/</button>
          <button className="numberBtn" onClick={() => dispatch(btnEquals())}>=</button>
        </div>
      </div>

    </div>
  );
};

export default Calculator;