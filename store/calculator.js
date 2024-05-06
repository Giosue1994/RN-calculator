import { createContext, useReducer, useState } from "react";

export const CalculatorContext = createContext({
  state: "",
  tapButtonHandler: (type, value) => {},
});

const initialState = {
  currentValue: "",
  operator: null,
  prevValue: null,
};

const resetState = {
  operator: null,
  prevValue: null,
};

export default function CalculatorProvider({ children }) {
  const [calculatorState, setCalculatorState] = useState(initialState);

  function tapButtonHandler(type, value) {
    if (type === "number") {
      setCalculatorState((prev) => {
        return {
          ...prev,
          currentValue: prev.currentValue + value.toLocaleString(),
          prevValue: prev.currentValue,
        };
      });
    }

    if (type === "operator") {
      setCalculatorState((prev) => {
        const current = parseFloat(prev.currentValue);
        const previous = parseFloat(prev.prevValue);

        if (prev.operator === "+") {
          return {
            ...prev,
            currentValue: current + previous,
            ...resetState,
          };
        }

        if (prev.operator === "-") {
          return {
            ...prev,
            currentValue: current - previous,
            ...resetState,
          };
        }

        if (prev.operator === "*") {
          return {
            ...prev,
            currentValue: current * previous,
            ...resetState,
          };
        }

        if (prev.operator === "/") {
          return {
            ...prev,
            currentValue: current / previous,
            ...resetState,
          };
        }

        return {
          ...prev,
          operator: value,
          prevValue: value,
          currentValue: prev.currentValue + value,
        };
      });
    }

    if (type === "equal") {
      setCalculatorState((prev) => {
        const operationArray = prev.currentValue.split("");
        const operation = operationArray.join("");

        function result(operation) {
          return new Function("return " + operation + ";").call();
        }

        console.log(result(operation));

        return {
          ...prev,
          currentValue: result(operation),
          ...resetState,
        };
      });
    }

    if (type === "percentage") {
      setCalculatorState((prev) => {
        return {
          ...prev,
          currentValue: prev.currentValue / 100,
        };
      });
    }

    if (type === "clear") {
      setCalculatorState(initialState);
    }

    if (type === "cancel") {
      setCalculatorState((prev) => {
        return {
          ...prev,
          currentValue: prev.currentValue.slice(0, -1),
          prevValue: prev.prevValue.slice(0, -1),
        };
      });
    }
  }

  console.log(calculatorState);

  const ctxValue = {
    state: calculatorState,
    tapButtonHandler,
  };

  return (
    <CalculatorContext.Provider value={ctxValue}>
      {children}
    </CalculatorContext.Provider>
  );
}
