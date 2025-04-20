import { StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  view: {
    backgroundColor: '#38bfe7',
    flexGrow: 1, // allow content to grow
    paddingBottom: 30, // spacing at bottom
  },
  headerSection: {
    width: '100%',
    paddingTop: 40,
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    backgroundColor: '#FDDA0D',
  },
  headerText: {
    textAlign: 'center',
    color: "#FFFFF0",
    fontSize: RFPercentage(8),
  },
  headerTextName: {
    color: "#FFFFF0",
    fontSize: RFPercentage(5),
    textAlign: 'center',
  },
  namewrap: {
    width: '100%',
    alignItems: 'center',
  },
  scoreSection: {
    paddingVertical: 20,
  },
  scoreCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '10%',
    marginVertical: 10,
  },
  scoreTitle: {
    fontSize: RFPercentage(6),
    color: "#fff",
    width: '70%',
  },
  scoreValue: {
    fontSize: RFPercentage(7),
    color: "#fff",
    textAlign: 'center',
    width: '30%',
  },
  gridContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    gap: 20,
  },
  gridItem: {
    backgroundColor: "#FDDA0D",
    paddingVertical: 30,
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRadius: 15,
  },
  buttonText: {
    color: "#FFFFF0",
    fontSize: RFPercentage(6),
    textAlign: "center",
  },
});
export default styles;