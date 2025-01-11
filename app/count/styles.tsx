import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff8e1", // Soft yellow background for the container
    padding: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 20,
  },
  cell: {
    width: "20%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#f57f17", // Dark yellow border color
    margin: 5,
    backgroundColor: "#fdd835", // Lighter yellow background for cells
    borderRadius: 10, // Rounded corners for a smoother look
  },
  number: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a237e", // Dark navy blue text for numbers
  },
  button: {
    backgroundColor: "#fbc02d", // Golden yellow background for the button
    padding: 15,
    borderRadius: 8,
    marginTop: 20, // Adding space between the grid and button
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a237e", // Dark navy blue text for button text
    textAlign: "center",
  },
});

export default styles;
