import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  con: {
    backgroundColor: 'white',
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginTop: 15,
    padding: 10,
    borderRadius: 8
  },
  name: {
    fontSize: 20,
    color: "#161616"
  },
  email: {
    fontSize: 15,
    color: '#a1a1a1'
  },
  contact: {
    fontSize: 15,
    color: '#a1a1a1'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});