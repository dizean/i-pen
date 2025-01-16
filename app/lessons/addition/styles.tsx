import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: "#fff8e1",
    paddingBottom: 100
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
    paddingHorizontal: 10,
  },
  fixedButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 20, 
    left: 20, 
    right: 20
  },
  
  button: {
    backgroundColor: "#fbc02d",
    padding: 15,
    borderRadius: 8,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a237e",
  },
  container: {
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    marginTop: 5,
    lineHeight: 25
  },
  highlightwrap: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  highlight: {
    fontWeight: "bold",
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  textbold: {
    fontWeight: 'bold'
  }
});

export default styles;
