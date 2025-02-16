import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: "100%",
    padding: "3%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    backdropFilter: "blur(10px)",
    borderWidth: 1,
    borderColor: "rgba(25, 42, 236, 0.3)",
   
  },
  title: { 
    fontSize: RFPercentage(10),
    textAlign: "center",
    padding: '2%'
  },
  text: {
    fontSize: RFPercentage(5),
    textAlign: 'center',
    padding: '2%'
  },
  question: {
    fontSize: RFPercentage(8),
    textAlign: "center",
    color: "#38bfe7",
    fontWeight: "600",
    borderWidth: 12,
    borderColor: "#38bfe7",
    padding: 10,
    borderRadius: 10
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
    fontSize: RFPercentage(9),
    color: "#fff",
    textAlign: "center",
  },
  score: {
    fontSize: RFPercentage(6),
    textAlign: "center",
    color: "#F57F17",
  },
  problem: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  numberLineContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    gap:10,
    alignItems: 'center'
  },
  number: {
    backgroundColor: "#FDDA0D",
    width: "20%",
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
  numberText: {
    fontSize: 18,
  },
  selectedStartingNumber: {
    backgroundColor: "#fbc02d",
  },
  selectedSecondNumberCorrect: {
    backgroundColor: "#388E3C",
  },
  selectedSecondNumberWrong: {
    backgroundColor: "#D32F2F",
  },
  selectedOption: {
    backgroundColor: "#fbc02d",
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
    height: "80%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },
  modalTitle: {
    fontSize: RFPercentage(7),
    marginBottom: 10,
  },
  modalText: {
    fontSize: RFPercentage(5),
    marginBottom: 20,
    textAlign: "center",
  },
  modalButton: {
    width: "100%",
    backgroundColor: "#FDDA0D",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    fontSize: RFPercentage(5),
    color: "#fff",
    textAlign: "center",
  },
  images: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "50%",
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
    alignSelf: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // For Android shadow
  },
});
export default styles;
