import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCount,
  decrementCount,
  incrementCountByAmount,
} from "../Features/Counter/CounterSlice";
import "../Styles/Counter.css";

const Counter = () => {
  const [amount, setAmount] = useState(0);

  const { value, steps } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementCount());
  };

  const handleDecrement = () => {
    dispatch(decrementCount());
  };

  const handleIncrementByAmount = () => {
    if (amount <= 0) return;
    if (isNaN(amount)) return;
    dispatch(incrementCountByAmount(amount));
  };

  return (
    <div className="counter-wrapper">
      <section className="counter-top">
        <main>{value}</main>
        <section className="counter-top-buttons">
          <button onClick={handleDecrement}>
            Decrement {steps === 1 ? "" : "by " + steps}
          </button>
          <button onClick={handleIncrement}>
            Increment {steps === 1 ? "" : "by " + steps}
          </button>
        </section>
      </section>
      <section className="counter-bottom">
        <input
          type="number"
          onChange={e => setAmount(e.target.valueAsNumber)}
          value={amount}
        />
        <button onClick={handleIncrementByAmount}>IncrementByAmount</button>
      </section>
    </div>
  );
};

export default Counter;
