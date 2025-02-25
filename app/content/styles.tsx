  import { Dimensions, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

  const styles = StyleSheet.create({
    view: {
      backgroundColor: '#38bfe7',
    },
    headerSection: {
      width: '100%',
      height: '25%',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '5%',
      borderBottomLeftRadius: 100,
      borderBottomRightRadius: 100,
      backgroundColor: '#FDDA0D'
    },
    headerText: {
      textAlign: 'center',
      color: "#FFFFF0",
      height: '70%',
      fontSize: RFPercentage(8),
    },
    headerTextName: {
      color: "#FFFFF0",
      fontSize: RFPercentage(5),
      textAlign: 'center',
      height: '30%',
    },
    namewrap:{
      width: '100%',
      height: '50%',
      
    },
    scoreSection: {
      width: '100%',
      height: '10%',
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
      height: '100%',
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40
    },
    fullWidthGridItem: {
      // width: "100%",
    },
    disabledGridItem: {
      backgroundColor: "#ccc", 
      opacity: 0.6,
    },
    
    gridItem: {
      backgroundColor: "#FDDA0D",
      width: "100%",
      height: '25%',
      justifyContent: "center",
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
