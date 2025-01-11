import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff8e1", // Soft yellow background
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    color: "#1a237e", // Darker navy blue text for formal feel
  },
  subtitle: {
    fontSize: 22,
    fontWeight: "600",
    marginVertical: 12,
    textAlign: "center",
    color: "#f57f17", // Dark yellow shade for subtitles
  },
  text: {
    fontSize: 18,
    marginVertical: 12,
    textAlign: "center",
    color: "#5d4037", // Brownish color for a formal tone
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#fbc02d", // Golden yellow for buttons
    padding: 15,
    borderRadius: 8,
    width: "45%",
    alignItems: "center", // Ensures text is centered within the button
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a237e", // Navy blue text for buttons
  },
  highlightwrap: {
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%', 
  },
  highlight: {
    backgroundColor: "#ffeb3b", // Bright yellow for highlight
    borderColor: '#f57f17', // Dark yellow for border
    width: 50,
    height: 50,
    borderRadius: 25,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    fontSize: 32,
    color: "#1a237e", // Dark navy blue for contrast
    marginHorizontal: 6, // Slightly larger gap for spacing
  },
});

export default styles;
