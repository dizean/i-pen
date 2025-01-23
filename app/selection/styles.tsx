import { Dimensions, Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: '#38bfe7'
  },
  wrapper: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    alignSelf: "center",
    padding: 10,
  },
  titlebg: {
    width: '100%',
    borderRadius: 20, 
    backgroundColor: '#FDDA0D',                        
    shadowColor: "#000",                      
    shadowOffset: { width: 0, height: 4 },     
    shadowOpacity: 0.3,                        
    shadowRadius: 5,                          
    elevation: 8,                            
    alignItems: "center",                   
    justifyContent: "center",     
    overflow: "hidden",       
  },  
  title: {
    width: "100%",
    fontSize: 40,
    padding: 30,
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 20,
    marginVertical: 10,
    color: '#fff'
  },
  optionsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    rowGap: 20,
  },
  optionButton: {
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    width: '48%',
    height: '25%',
    backgroundColor: "#FDDA0D", 
    padding: 24,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.06)",
    shadowColor: "#000",
    shadowOpacity: 0.6,
    shadowRadius: 254,
    elevation: 8,
  },
  optionText: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "900",
    textAlign: "center",
    fontFamily: "FredokaOne-Regular",
  },
  image: {
    width: "100%",
    height: "50%",
    resizeMode: "contain",
  },
  
});
// #AEEEEE
// #2C3E50
// #F1C40F
export default styles;
