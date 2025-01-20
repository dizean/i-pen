import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  wrapper: {
    width: '100%',
    backgroundColor: "rgba(255, 255, 255, 0.2)", 
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
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
      color: "#F57F17", // Deep orange-yellow for emphasis
    },
    question: {
      fontSize: 20,
      marginBottom: 20,
      textAlign: "center",
      color: "#5D4037", // Warm brown for readability
      fontWeight: "600",
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
      fontWeight: "bold",
    },
    score: {
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 20,
      color: "#F57F17",
    },
  });
  
  export default styles