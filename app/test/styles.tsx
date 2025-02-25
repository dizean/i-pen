import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    justifyContent: "center",
    backgroundColor: "#38bfe7",
  },
  wrapper: {
    width: "100%",
    height: '100%',
    padding: "3%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    backdropFilter: "blur(10px)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.3)",
  },
  title: {
    textAlign: "center",
    color: "rgb(255, 255, 255)",
    textShadowColor: '#38bfe7',
    textShadowOffset: {width: 5,height:3},
    textShadowRadius: 3,
    padding: 0,
  },
  question: {
    textAlign: "center",
    color: "rgb(255, 255, 255)",
    borderWidth: 10,
    borderColor: "#38bfe7",
    padding: 10,
    borderRadius: 10,
    textShadowColor: '#38bfe7',
    textShadowOffset: {width: 5,height:3},
    textShadowRadius: 3
  },
  optionsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  optionButton: {
    backgroundColor: "#FDDA0D",
    width: "48%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginVertical: 10,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    borderWidth: 2,
    borderColor: "#38bfe7",
  },
  optionText: {
    fontSize: RFPercentage(8),
    color: "#fff",
    textAlign: "center",
  },
  score: {
    fontSize: RFPercentage(5),
    textAlign: "center",
    color: "#F57F17",
  },
  selectedOption: {
    backgroundColor: "blue",
  },
  correctOption: {
    backgroundColor: "green",
  },
  wrongOption: {
    backgroundColor: "red",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "90%",
    height: "70%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
    display: "flex",
    justifyContent: "space-between",
    position: "relative", // Ensures the background GIF stays inside
    overflow: "hidden", // Prevents any overflow
  },
  backgroundGif: {
    position: "absolute",
    width: "150%",
    height: "150%",
    opacity: .8,
    alignSelf: 'center',
  },
  modalTitle: {
    fontSize: RFPercentage(8),
  },
  modalText: {
    fontSize: RFPercentage(6),
    textAlign: "center",
  },
  modalButton: {
    width: '100%',
    backgroundColor: "#FDDA0D",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    fontSize: RFPercentage(6),
    color: "#fff",
    textAlign: 'center'
  },
  images: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "60%",
  },
  gif: {
    width: "100%", 
    height: "100%", 
  },
  timer: {
    fontSize: RFPercentage(6),
    color: "#ff5555",
    backgroundColor: "#ffe5e5",
    borderWidth: 2,
    borderColor: "#ff5555",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: "center",
    alignSelf: "center", // Center horizontally
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // For Android shadow
  },
});

export default styles;
