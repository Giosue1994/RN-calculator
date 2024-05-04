import { StyleSheet, Text, View } from "react-native";

export default function Operations() {
  return <View style={styles.operations}></View>;
}

const styles = StyleSheet.create({
  operations: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#000000",
    height: 100,
  },
});
