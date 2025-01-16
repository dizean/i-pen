import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // INTRODUCTION
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
      backgroundColor: "#f5f5f5",
    },
    wrapper: {
        width: '100%', 
        backgroundColor: 'rgb(255, 242, 0)', 
        borderRadius: 10,
        alignSelf: 'center'
    },
    title: {
      fontSize: 40,
      fontWeight: "bold",
      textAlign: 'center',
      color: 'white'
    },
    subtitle: {
      fontSize: 40,
      fontWeight: "bold",
      textAlign: 'center',
      color: 'white'
    },
    input: {
      width: '90%',
      height: '15%',
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      padding: 12,
      backgroundColor: "#fff",
      margin: 'auto'
    },
    button: {
      width: '90%',
      backgroundColor: "#fbc02d",
      padding: 20,
      borderRadius: 8,
      alignItems: "center",
      margin: 'auto'
    },
    buttonText: {
      color: "#fff",
      fontSize: 30,
      fontWeight: "bold",
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