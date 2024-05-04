import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import Row from "./Row";

export default function Keyboard() {
  function clickHandler(type, value) {
    console.log(`type: ${type}, value: ${value}`);
  }

  return (
    <View style={styles.screen}>
      <Row>
        <Button
          bgColor="#ccc"
          color="black"
          onPress={() => clickHandler("clear")}
        >
          AC
        </Button>
        <Button
          bgColor="#ccc"
          color="black"
          onPress={() => clickHandler("percentage")}
        >
          %
        </Button>
        <Button
          bgColor="#ccc"
          color="black"
          onPress={() => clickHandler("cancel")}
        >
          C
        </Button>
        <Button
          bgColor="#d3ca16"
          color="white"
          onPress={() => clickHandler("operator", "/")}
        >
          /
        </Button>
      </Row>
      <Row>
        <Button onPress={() => clickHandler("number", 7)}>7</Button>
        <Button onPress={() => clickHandler("number", 8)}>8</Button>
        <Button onPress={() => clickHandler("number", 9)}>9</Button>
        <Button
          bgColor="#d3ca16"
          color="white"
          onPress={() => clickHandler("operator", "*")}
        >
          *
        </Button>
      </Row>
      <Row>
        <Button onPress={() => clickHandler("number", 4)}>4</Button>
        <Button onPress={() => clickHandler("number", 5)}>5</Button>
        <Button onPress={() => clickHandler("number", 6)}>6</Button>
        <Button
          bgColor="#d3ca16"
          color="white"
          onPress={() => clickHandler("operator", "-")}
        >
          -
        </Button>
      </Row>
      <Row>
        <Button onPress={() => clickHandler("number", 1)}>1</Button>
        <Button onPress={() => clickHandler("number", 2)}>2</Button>
        <Button onPress={() => clickHandler("number", 3)}>3</Button>
        <Button
          bgColor="#d3ca16"
          color="white"
          onPress={() => clickHandler("operator", "+")}
        >
          +
        </Button>
      </Row>
      <Row>
        <Button
          style={{ flexGrow: 2 }}
          onPress={() => clickHandler("number", 0)}
        >
          0
        </Button>
        <Button onPress={() => clickHandler("number", ",")}>,</Button>
        <Button
          bgColor="#d3ca16"
          color="white"
          onPress={() => clickHandler("equal")}
        >
          =
        </Button>
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
