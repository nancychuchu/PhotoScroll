import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    width: width * 0.9,
    height: width * 0.9,
    margin: width * 0.1
  },
  title: {
    position: "absolute",
    zIndex: 99999,
    color: "#ffffff",
    fontSize: 15,
    textAlign: "center",
    alignSelf: "center",
    transform: [{ rotate: "45deg" }]
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default styles;
