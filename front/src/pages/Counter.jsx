import React, { useState, useEffect } from "react";
import "../styles/Counter.css";
import Joyride from "react-joyride";


const Counter = () => {
  const [count, setCount] = useState(0);
  const [showTour, setShowTour] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleJoyrideCallback = (data) => {
    if (data.action === "close") {
      setShowTour(false);
    }
  };

  const steps = [
    {
      target: ".increment-button",
      content: "Pulsa el botón Incrementar para incrementar el número",
      placement: "top",
    },
    {
      target: ".decrement-button",
      content: "Luego, pulsa el botón Decrementar para decrementar el número",
      placement: "top",
    },
  ];

  useEffect(() => {
    setShowTour(true);
  }, []);

  return (
    <div className="counter-container">
      <Joyride
        continuous
        scrollToFirstStep
        showProgress
        showSkipButton
        run={showTour}
        steps={steps}
        callback={handleJoyrideCallback}
      />

      <div className="counter-content">
        <h1 className="num">{count}</h1>
        <div className="button-container">
          <button className="increment-button" onClick={increment}>
            Incrementar
          </button>
          <button className="decrement-button" onClick={decrement}>
            Decrementar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
