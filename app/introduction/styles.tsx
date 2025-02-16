import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
    // INTRODUCTION
    container: {
      flex: 1,
      height: height,
      justifyContent: 'center',
      backgroundColor: '#38bfe7'
    },
    wrapper: {
        width: '100%', 
        height: '100%',
        backgroundColor: "rgba(255, 255, 255, 0.8)", 
        borderRadius: 10,
        alignSelf: 'center',
        padding: 5
    },
    subtitle: {
      fontSize: RFPercentage(6),
      textAlign: 'center',
      color: '#38bfe7'
    },
    input: {
      width: '90%',
      height: '15%',
      fontSize: RFPercentage(5),
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      padding: 12,
      backgroundColor: "#fff",
      margin: 'auto',
      color: '#38bfe7'
    },
    button: {
      width: '90%',
      backgroundColor: "#FDDA0D",
      padding: 20,
      borderRadius: 8,
      alignItems: "center",
      margin: 'auto'
    },
    buttonText: {
      color: "#fff",
      fontSize: 30
    },
    image:{
      width: '70%',
      height: '50%',
      objectFit:'contain',
      margin: 0,
      alignSelf: 'center'
    },
    disabledButton: {
      backgroundColor: "#d3d3d3", 
    },
    disabledButtonText: {
      color: "#a9a9a9", 
    },
  });

export default styles