import { createContext, useState } from "react";
import { create, all } from "mathjs";

const math = create(all);

export const CalculatorContext = createContext({
  state: {},
  tapButtonHandler: (type, value) => {},
});

const initialState = {
  currentValue: "0",
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
        if (calculatorState.currentValue === "0" && value === ".") {
          return {
            ...prev,
            currentValue: `0${value}`,
          };
        }

        if (calculatorState.currentValue === "0") {
          return {
            ...prev,
            currentValue: `${value}`,
          };
        }

        return {
          ...prev,
          currentValue: prev.currentValue + `${value}`,
          prevValue: prev.currentValue,
        };
      });
    }

    if (type === "operator") {
      setCalculatorState((prev) => {
        // Se l'operatore precedente era già presente e l'ultimo carattere non era un operatore, concatena l'operatore
        const currentValue = prev.currentValue;
        const lastChar = currentValue[currentValue.length - 1];
        if (prev.operator && "+-*/".includes(lastChar)) {
          return {
            ...prev,
            currentValue: currentValue.slice(0, -1) + value, // Rimuovi l'ultimo operatore e concatena quello nuovo
            operator: value,
          };
        }
        // Se l'ultimo carattere non è un operatore, concatena l'operatore
        if (!"+-*/".includes(lastChar)) {
          return {
            ...prev,
            currentValue: currentValue + value,
            operator: value,
          };
        }
        // Altrimenti, mantieni il valore corrente senza aggiungere l'operatore
        return prev;
      });
    }

    if (type === "equal") {
      setCalculatorState((prev) => {
        let calculatedResult;
        const operation = prev.currentValue;

        try {
          calculatedResult = math.evaluate(operation);
        } catch (error) {
          calculatedResult = prev.currentValue;
        }

        if (
          prev.currentValue === "0" ||
          prev.currentValue.length === 0 ||
          isNaN(prev.currentValue.slice(-1))
        ) {
          return {
            ...prev,
            currentValue: "0",
            ...resetState,
          };
        }

        return {
          ...prev,
          currentValue: calculatedResult.toString(),
          ...resetState,
        };
      });
    }

    if (type === "percentage") {
      if (!isNaN(calculatorState.currentValue)) {
        setCalculatorState((prev) => {
          return {
            ...prev,
            currentValue: prev.currentValue / 100,
          };
        });
      } else {
        return;
      }
    }

    if (type === "clear") {
      setCalculatorState(initialState);
    }

    if (type === "cancel") {
      if (
        calculatorState.currentValue !== undefined ||
        calculatorState.currentValue !== "" ||
        calculatorState.prevValue !== null
      ) {
        setCalculatorState((prev) => {
          return {
            ...prev,
            currentValue: prev.currentValue.slice(0, -1),
            ...resetState,
          };
        });
      } else {
        return;
      }
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
