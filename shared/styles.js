import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#658bc9',
    height: '100%'
  },
  createLogo: {
    height: 230,
    width: 300,
  },
  createAccImage: {
    height: 131,
    width: 170,
    alignSelf: 'center',
    marginTop: 15
  },
  smallLogo: {
    height: 95,
    width: 120,
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 15,
  },
  createCenterBox: {
    paddingTop: 20,
    alignSelf: 'center'
  },
  titleText: {
    marginTop: 20,
    fontSize: 36,
    alignSelf: 'center',
  },
  titleText1: {
    marginTop: 25,
    fontSize: 36,
    position: 'absolute',
    alignSelf: 'center'
  },
  headerText: {
    margin: 10,
    fontSize: 24,
    alignSelf: 'center',
  },
  smallerHeaderText: {
    margin: 10,
    fontSize: 16,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 2,
    fontSize: 24,
    padding: 12,
    margin: 10
  },
  input1: {
    borderWidth: 1,
    fontSize: 16,
    padding: 4, 
    marginTop: 8,
    marginBottom: 8,
    marginHorizontal: 150,
  },
  clickableText: {
    textDecorationLine: 'underline',
    textDecorationColor: 'blue',
    alignSelf: 'center',
    color: 'blue',
    fontSize: 18,
    paddingBottom: 5,
  },
  createNewText: {
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 8,
  },
  loginButton: {
    alignSelf: 'center',
    marginTop: 15,
    backgroundColor: '#617dab',
    borderRadius: 25,
    width: 100,
    height: 40,
  },
  loginText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 7,
  },
  createAccountOutline: {
    borderWidth: 2,
    alignSelf: 'center',
    width: 500,
    height: 700,
    flex: 1,
    marginBottom: 50,
    marginTop: 50,
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
    width: 240,
    alignSelf: 'center'
  },
  smallerHorizontalLine: {
    borderBottomColor: 'black',
    borderWidth: StyleSheet.hairlineWidth,
    width: '100%',
    alignSelf: 'center'
  },
  viewBottomBorder: {
    borderBottomWidth: 2,
    width: '100%',
    borderColor: 'black'
  },
  viewRightBorder: {
    borderRightWidth: 2,
    width: 160,
    height: '100%',
    borderColor: 'black'
  },
  viewLeftBorder: {
    borderLeftWidth: 2,
    width: 160,
    height: '100%',
    borderColor: 'black',
    position: 'absolute',
    right: 1,
    marginTop: 125
  },
  errorText: {
    color: '#b51010',
    padding: 5,
    fontSize: 18,
    alignSelf: 'center',
  }
});

export default styles;