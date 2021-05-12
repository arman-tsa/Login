import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  welcom: {
    fontSize: 30,
    fontFamily: "bold",
    marginLeft: 20,
    color: "#161616",
  },
  description: {
    marginHorizontal: 20,
    marginTop: 50,
    color: '#16161699',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mobileCode: {
    borderWidth: 1,
    borderColor: '#161616',
    padding: 10,
    borderRadius: 5,
    marginLeft: 20,
    marginTop: 30,
    height: 45
  },
  conStyle: {
    marginLeft: 15,
    marginTop: 30,
    flexGrow: 1,
    marginRight: 20
  },
  textInputStyle: {
    fontSize: 14,
    borderBottomWidth: 1,
    marginHorizontal: 20,
    borderBottomColor: "#242424",
    marginTop: 40
  },
  middleCon: {
    justifyContent: "space-between",
    flex: 1
  },
  btn: {

  },
  text: {
    fontSize: 24,
    color: "#242424",
    opacity: 0.8
  },
  errortxt: {
    fontSize: 14,
    color: 'red',
    marginLeft: 20,
    marginTop: 10
  }
});