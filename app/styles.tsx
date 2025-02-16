import { StyleSheet, Dimensions } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: width,
    height: height,
    backgroundColor: "#38bfe7",
  },
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: "3%",
  },
  view: {
    width: "100%",
    height: '60%',
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 20,
    padding: "5%",
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: width * 0.28,
    fontWeight: "900",
    textAlign: "center",
    color: "#38bfe7",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  titleHighlight: {
    color: "#FDDA0D",
  },
  text: {
    fontFamily: 'BalooFont',
    fontSize: RFPercentage(6),
    textAlign: "center",
    color: "#38bfe7",
    textShadowColor: '#fff',
    textShadowOffset: {width:4, height:4},
    textShadowRadius: 5
  },
  image: {
    width: 200,
    height: "20%",
    margin: "auto",
    objectFit: "contain",
  },
  button: {
    width: "100%",
    borderRadius: 20,
    padding: "6%",
    backgroundColor: "#FDDA0D",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    zIndex: 0,
  },
  buttonText: {
    fontSize: RFPercentage(6),
    textAlign: 'center',
    fontFamily: 'BalooFont',
    color: "#fff",
    textShadowColor: '#38bfe7',
    textShadowOffset: {width:4, height:4},
    textShadowRadius: 5
  },
  math: {
    width: "100%",
    height: "45%",
  },
  boy: {
    width: "50%",
    height: "100%",
  },
  girl: {
    width: "50%",
    height: "100%",
  },
  space: {
    width: "100%",
    height: "40%",
    padding: 0,
    margin: 0,
  },
  images: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "60%",
  }, textContainer: {
    flexDirection: "row", // Arrange characters in a row
    justifyContent: "center",
    alignItems: "flex-end", // Align at the bottom for wave effect
    marginTop: 10,
    flexWrap: 'wrap', // Wrap if needed
  },
});

export default styles;
