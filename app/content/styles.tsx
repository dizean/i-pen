import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerSection: {
    padding: 15,
    backgroundColor: "#fdd835",
    borderRadius: 15,
    marginBottom: 20,
  },
  headerText: {
    color: "#1a237e",
    fontSize: 28,
    fontWeight: "700",
  },
  headerTextName: {
    color: "#1a237e",
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
    backgroundColor: "#ffecb3",
    padding: 15,
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    alignItems: "center",
    marginHorizontal: 5,
  },
  scoreTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#5d4037",
    marginBottom: 8,
  },
  scoreValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1a237e",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap:10,
  },
  
  gridItem: {
    backgroundColor: "#fbc02d",
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
    color: "#1a237e",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  disabledButton: {
    backgroundColor: '#ccc'
  },
});

export default styles;
