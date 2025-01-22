import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
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
    backgroundColor: 'rgb(56,191,231)',                        
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
    rowGap: 30,
  },
  optionButton: {
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    width: 180,
    height: 180,
    backgroundColor: "rgba(255, 255, 255, 0.8)", 
    padding: 24,
    borderWidth: 2,
    borderColor: "rgba(0, 0, 0, 0.06)",
    overflow: 'hidden'
  },
  optionText: {
    color: "#fff",
    fontSize: 40,
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

export default styles;
