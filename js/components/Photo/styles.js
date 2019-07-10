import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: width * 0.9,
    height: width * 0.9,
    margin: width * 0.05
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
    height: "100%",
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#d5bdbd"
  },
  shadow: {
    borderRadius: 10,
    shadowColor: "#001f4b",
    shadowRadius: 5,
    shadowOpacity: 0.5,
    shadowOffset: { height: 10, width: 10 },
    backgroundColor: "#fff"
  }
});

export default styles;
