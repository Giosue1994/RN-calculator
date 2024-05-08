import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Button({
  props,
  children,
  onPress,
  bgColor,
  color,
  style,
}) {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        style,
        { backgroundColor: bgColor ? bgColor : "black" },
        styles.button,
        pressed ? styles.pressed : null,
      ]}
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Text style={[{ color: color ? color : "white" }, styles.text]}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: "#252525",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  pressed: {
    opacity: 0.7,
  },
});
