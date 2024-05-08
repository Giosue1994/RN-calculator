import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import Row from "./Row";
import { useContext, useEffect, useState } from "react";
import { CalculatorContext } from "../store/calculator";

export default function Calculator() {
  const { state, tapButtonHandler } = useContext(CalculatorContext);

  return (
    <>
      <View style={styles.operations}>
        <Text style={styles.text}>{state.currentValue}</Text>
      </View>

      <View style={styles.screen}>
        <Row>
          <Button
            bgColor="#ccc"
            color="black"
            onPress={() => tapButtonHandler("clear")}
          >
            AC
          </Button>
          <Button
            bgColor="#ccc"
            color="black"
            onPress={() => tapButtonHandler("percentage")}
          >
            %
          </Button>
          <Button
            bgColor="#ccc"
            color="black"
            onPress={() => tapButtonHandler("cancel")}
          >
            C
          </Button>
          <Button
            bgColor="#d3ca16"
            color="white"
            onPress={() => tapButtonHandler("operator", "/")}
          >
            /
          </Button>
        </Row>
        <Row>
          <Button onPress={() => tapButtonHandler("number", 7)}>7</Button>
          <Button onPress={() => tapButtonHandler("number", 8)}>8</Button>
          <Button onPress={() => tapButtonHandler("number", 9)}>9</Button>
          <Button
            bgColor="#d3ca16"
            color="white"
            onPress={() => tapButtonHandler("operator", "*")}
          >
            *
          </Button>
        </Row>
        <Row>
          <Button onPress={() => tapButtonHandler("number", 4)}>4</Button>
          <Button onPress={() => tapButtonHandler("number", 5)}>5</Button>
          <Button onPress={() => tapButtonHandler("number", 6)}>6</Button>
          <Button
            bgColor="#d3ca16"
            color="white"
            onPress={() => tapButtonHandler("operator", "-")}
          >
            -
          </Button>
        </Row>
        <Row>
          <Button onPress={() => tapButtonHandler("number", 1)}>1</Button>
          <Button onPress={() => tapButtonHandler("number", 2)}>2</Button>
          <Button onPress={() => tapButtonHandler("number", 3)}>3</Button>
          <Button
            bgColor="#d3ca16"
            color="white"
            onPress={() => tapButtonHandler("operator", "+")}
          >
            +
          </Button>
        </Row>
        <Row>
          <Button
            style={{ flexGrow: 2 }}
            onPress={() => tapButtonHandler("number", 0)}
          >
            0
          </Button>
          <Button onPress={() => tapButtonHandler("number", ".")}>.</Button>
          <Button
            bgColor="#d3ca16"
            color="white"
            onPress={() => tapButtonHandler("equal")}
          >
            =
          </Button>
        </Row>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  operations: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "#000000",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  screen: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 60,
    color: "white",
  },
});
