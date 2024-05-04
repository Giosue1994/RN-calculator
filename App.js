import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Keyboard from "./components/Keyboard";
import Operations from "./components/Operations";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Operations />
      <Keyboard />
    </>
  );
}

const styles = StyleSheet.create({});
