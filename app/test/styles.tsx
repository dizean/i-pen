import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    backgroundColor: "#38bfe7",
  },
  wrapper: {
    width: "100%",
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
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  question: {
    fontSize: 30,
    marginBottom: 20,
    textAlign: "center",
    color: "black",
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
    fontSize: 30,
    color: "#212121",
    textAlign: "center",
  },
  score: {
    fontSize: 20,
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
    width: "80%",
    height: "60%",
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
    fontSize: 34,
    marginBottom: 10,
  },
  modalText: {
    fontSize: 24,
    marginBottom: 20,
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
    fontSize: 24,
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
    fontSize: 24,
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
