import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  wrapper: {
    width: '100%', 
    height: '100%',
    backgroundColor: 'rgb(255, 242, 0)',
    borderRadius: 10,
    alignSelf: 'center',
    padding: 10
    
  },
  title: {
    fontSize: 30,
    paddingVertical: 10,
    fontWeight: "bold",
      
  },
  optionsContainer: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'space-between',
    rowGap: 10
  },
  optionButton: {
    backgroundColor: "yellow",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "45%",
    height: '30%',
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  optionText: {
    color: "#1a237e",
    fontSize: 50,
    fontWeight: "600",
    textAlign: 'center'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  }
});

export default styles;
