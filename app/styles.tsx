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
    rowGap: 20,
  },
  view: {
    backgroundColor: "rgba(255, 255, 255, 0.8)", 
    borderRadius: 20,
    padding: 24,
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: 100,
    fontWeight: "900",
    textAlign: "center",
    color: "#38bfe7", 
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  titleHighlight:{
    color: '#FDDA0D'
  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  image: {
    width: 330,
    height: 300,
    marginVertical: 20,
  },
  button: {
    width: '90%',
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#FDDA0D',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
});

export default styles;
