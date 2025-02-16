import { Dimensions, Platform, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: '#38bfe7',
  },
  wrapper: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    alignSelf: "center",
    padding: 10,
  },
  titleWrapper: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    width: "100%", 
  },
  title: {
    width: '100%',
    fontSize: RFPercentage(6.5),
    color: "#fff", 
    paddingLeft: '14%',
    textShadowColor: "#FDDA0D", // Border color
    textShadowOffset: { width: 2, height: 2 }, // Position of shadow
    textShadowRadius: 3, // Blur effect
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  optionsContainer: {
    width: "100%",
    height: '100%',
    flexWrap: "wrap",
    alignItems: 'center',
    justifyContent: "space-evenly",
    rowGap: 20,
    columnGap: 10,
  },
  background: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    height: "30%",
    backgroundColor: "#FDDA0D",
    overflow: "hidden",
  },
  optionButton: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "48%",
    height: "30%",
    // backgroundColor: "#afe3ee",
    overflow: "hidden", 
    position: 'relative'
  },
  circle: {
    position: "absolute",
    width: "100%",
    height: "50%",
    top: 0,
    opacity: .8,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  animatedBorder: {
    position: "absolute",
    borderWidth: 5,
    borderRadius: 1,
    borderColor: '#38bfe7'
  },
  optionText: {
    width: '100%',
    height: '75%',
    color: "#fff",
    fontSize: 50,
    textAlign: "center",
    padding:20,
    borderRadius: 100,
    backgroundColor: 'blue',
  },
  image: {
    width: "100%",
    height: "50%",
    resizeMode: "contain",
  },
});

export default styles;
