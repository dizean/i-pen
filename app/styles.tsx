import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    resizeMode: "cover",
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    rowGap: 40
  },
  view: {
    backgroundColor: "rgba(255, 255, 255, 0.5)", 
    borderRadius: 10,
    padding: 16,
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: 60,
    fontWeight: "bold",
    textAlign: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "light",
    textAlign: "center",
  },
  image:{
    width: 300,
    height: 300
  }
});

export default styles;
