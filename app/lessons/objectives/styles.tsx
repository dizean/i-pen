import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    paddingHorizontal: 10,
  },
  fixedButtonContainer: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0, 
    paddingVertical: 10,
    borderTopWidth: 1, 
    borderColor: "#000", 
  },
  button: {
    padding: 15,
    borderRadius: 15,
    width: "30%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#1a237e",
  },
  container: {
  },
  title: {
    fontSize: RFPercentage(7),
    paddingVertical: 5
  },
  subtitle: {
    fontSize: RFPercentage(6),
    paddingVertical: 5
  },
  sectiontititle: {
    fontSize: RFPercentage(5),
    paddingVertical: 10
  },
  text: {
    fontSize: RFPercentage(4),
    lineHeight: 30,
    paddingVertical: 5
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  textcenter: {
    textAlign: 'center',
  },
  highlight: {
    backgroundColor: 'yellow',
    borderRadius: 100,
    borderWidth: 10,
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "#5D4037",
  },
  optionsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  optionButton: {
    backgroundColor: "#FFEB3B", // Bright yellow for buttons
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
    borderColor: "#F57F17", // Border matches title color
  },
  optionText: {
    fontSize: 18,
    color: "#212121", // Dark gray for better contrast
    textAlign: "center",
  },
  score: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    color: "#F57F17",
  },
});

export default styles;
