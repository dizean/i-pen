  import { Dimensions, StyleSheet } from "react-native";

  const styles = StyleSheet.create({
    view: {
      flex: 1,
      backgroundColor: '#38bfe7',
    },
    scrollView: {
      height: '100%'
    },
    headerSection: {
      width: '100%',
      height: 350,
      display: 'flex',
      alignItems: 'center',
      paddingVertical: '10%',
      paddingHorizontal: '2%',
      borderWidth: 1,
      borderColor: '#38bfe7', 
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
      backgroundColor: '#FDDA0D'
    },
    headerText: {
      color: "#FFFFF0",
      fontSize: 28,
      textAlign: 'center'
    },
    headerTextName: {
      color: "#FFFFF0",
      fontSize: 20,
      marginTop: 5,
      textAlign: 'center'
    },
    namewrap:{
      width: '100%',
      height: '30%',
      
    },
    scoreSection: {
      width: '100%',
      height: 100,
    },
    scoreCard: {
      width: '100%',
      display: 'flex',
      height: '50%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: '10%',
    },
    scoreTitle: {
      width: '75%',
      fontSize: 25,
      color: "#fff",
      marginBottom: 0,
    },
    scoreValue: {
      width: '25%',
      fontSize: 32,
      color: "#fff",
      textAlign: 'center',
    },
    gridContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems:'center',
      gap: 10,
      height: 600,
      borderWidth: 1,
      borderColor: '#38bfe7',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40
    },
    fullWidthGridItem: {
      width: "100%",
      fontSize: 50
    },
    disabledGridItem: {
      backgroundColor: "#ccc", 
      opacity: 0.6,
    },
    
    gridItem: {
      backgroundColor: "#FDDA0D",
      width: "100%",
      height: '15%',
      justifyContent: "center",
      padding: '2%',
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
    buttonText: {
      color: "#FFFFF0",
      fontSize: 30,
      textAlign: "center",
    },
    disabledButton: {
      backgroundColor: "#ccc",
    },
  });

  export default styles;
