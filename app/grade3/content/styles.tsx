import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff8e1", // Soft yellow background
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  headerSection: {
    padding: 15,
    backgroundColor: "#fdd835",
    borderRadius: 15,
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    color: "#1a237e", // Navy blue text
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },
  headerTextName: {
    color: "#1a237e", // Navy blue text
    fontSize: 20,
    fontWeight: "500",
    marginTop: 5,
  },
  scoreSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 10,
  },
  scoreCard: {
    flex: 1,
    backgroundColor: "#ffecb3", // Soft yellow card
    padding: 15,
    borderRadius: 15,
    elevation: 5, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: "center",
    marginHorizontal: 5,
  },
  scoreTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#5d4037", // Brown text for a formal tone
    marginBottom: 8,
  },
  scoreValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1a237e", // Navy blue
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap:10,
  },
  
  gridItem: {
    backgroundColor: "#fbc02d", // Yellow for buttons
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    padding:40,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    color: "#1a237e", // Navy blue text
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  disabledButton: {
    backgroundColor: '#ccc'
  },
});

export default styles;
