import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import Calculator from "./components/Calculator";
import CalculatorProvider from "./store/calculator";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    </>
  );
}

const styles = StyleSheet.create({});
