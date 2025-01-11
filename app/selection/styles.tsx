import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  wrapper: {
    width: '80%', 
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 20, 
    alignSelf: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 20,
    color: 'rgb(255, 255, 255)'
  },
  optionsContainer: {
    padding:20,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-between',
    gap: 10,
  },
  optionButton: {
    backgroundColor: "#fbc02d",
    paddingHorizontal: 5,
    paddingVertical:40,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  optionText: {
    color: "#1a237e", // Navy blue text
    fontSize: 18,
    fontWeight: "600",
  },
});

export default styles;
