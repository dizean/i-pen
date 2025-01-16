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
    bottom: 0, 
    left: 20, 
    right: 20,
    backgroundColor: "#fff8e1",
    paddingVertical: 20
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
    fontSize: 50,
    fontWeight: "bold",
    paddingVertical: 0
  },
  subtitle: {
    fontSize: 40,
    fontWeight: "600",
    paddingVertical: 10
  },
  sectiontititle: {
    fontSize: 25,
    fontWeight: "500",
    paddingVertical: 10
  },
  text: {
    fontSize: 20,
    lineHeight: 30,
    paddingVertical: 5
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 10,
  },
  textcenter: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  textbold: {
    fontWeight: 'bold'
  },
  highlight: {
    fontWeight: "bold",
    fontSize: 20,
    backgroundColor: 'yellow'
  },
});

export default styles;
