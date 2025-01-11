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
        backgroundColor: "rgba(114, 114, 110, 0.3)", 
        borderRadius: 10,
        paddingVertical: 20,
        paddingHorizontal: 10,
        alignSelf: 'center'
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: 'center',
      color: 'white'
    },
    subtitle: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: 'center',
      color: 'white'
    },
    input: {
      width: '75%',
      height: '15%',
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      padding: 12,
      backgroundColor: "#fff",
      margin: 'auto'
    },
    button: {
      width: '75%',
      backgroundColor: "#fbc02d",
      padding: 15,
      borderRadius: 8,
      alignItems: "center",
      margin: 'auto'
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    image:{
      width: '70%',
      height: '50%',
      objectFit:'contain',
      margin: 0,
      alignSelf: 'center'
    }
  });

export default styles