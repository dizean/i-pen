import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  optionsContainer: {
    width: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  optionButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "45%", // Each button takes half the width of the container
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  optionText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default styles;
