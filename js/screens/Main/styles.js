import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center"
  },
  title: {
    color: "#d5bdbd",
    margin: 30,
    marginTop: 50,
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center"
  }
});

export default styles;
