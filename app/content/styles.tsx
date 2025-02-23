  import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

  const styles = StyleSheet.create({
    view: {
      flex: 1,
      height: 1000,
      backgroundColor: '#38bfe7',
    },
    scrollView: {
      height: 1000
    },
    headerSection: {
      width: '100%',
      height: 350,
      display: 'flex',
      alignItems: 'center',
      paddingVertical: '10%',
      paddingHorizontal: '2%',
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
      backgroundColor: '#FDDA0D'
    },
    headerText: {
      color: "#FFFFF0",
      fontSize: RFPercentage(8),
      textAlign: 'center'
    },
    headerTextName: {
      color: "#FFFFF0",
      fontSize: RFPercentage(5),
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
      fontSize: RFPercentage(6),
      color: "#fff",
      marginBottom: 0,
    },
    scoreValue: {
      width: '25%',
      fontSize: RFPercentage(7),
      color: "#fff",
      textAlign: 'center',
    },
    gridContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems:'center',
      gap: 10,
      height: 800,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40
    },
    fullWidthGridItem: {
      width: "100%",
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
      fontSize: RFPercentage(6),
      textAlign: "center",
    },
    disabledButton: {
      backgroundColor: "#ccc",
    },
  });

  export default styles;
