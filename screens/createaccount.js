import axios from 'axios';
import React from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import styles from '../shared/styles';

export default function createAccountScreen({ navigation }) {

  const [user, inputUser] = React.useState("");
  const [pass, inputPass] = React.useState("");
  const [validPass, inputValidPass] = React.useState("");
  const [fName, inputFName] = React.useState("");
  const [lName, inputLName] = React.useState("");
  const [error, setError] = React.useState("");

  const bringLoginScreen = () => {
    navigation.navigate('Login')
  }

  function handleSignup(){

    if(user == "" || pass == "" || fName == "" || lName == ""){
      console.log("Null values.");
      setError("Required criteria not entered.");
    }else if(pass != validPass){
      console.log("Passwords do not match.");
      setError("Passwords do not match.");
    }
    else{
      // conditions met post to DB
      console.log(user);
      console.log(pass);
      console.log(fName);
      console.log(lName);

      console.log("Sending to DB.")
      axios.post('http://192.168.1.181:4545/acc', {
        user: user,
        pass: pass,
        fName: fName,
        lName: lName,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

      navigation.navigate('Login');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.createAccountOutline}>
        <Image style={styles.createAccImage} source={require('../assets/cloudupload.png')}/>
        <Text style={styles.titleText}>Registration</Text>
        <View style={styles.horizontalLine}></View>
        <TextInput 
          style={styles.input1}
          onChangeText={inputFName}
          placeholder={"First Name"}
        />
        {/* <TextInput 
          style={styles.input1}
          onChangeText={inputMInit}
          placeholder={"Middle Initial"}
        /> */}
        <TextInput 
          style={styles.input1}
          onChangeText={inputLName}
          placeholder={"Last Name"}
        />
        {/* <TextInput 
          style={styles.input1}
          onChangeText={inputbDay}
          placeholder={"Birthdate"}
        /> */}
        <Text style={styles.headerText}>Account Information</Text>
        <View style={styles.horizontalLine}></View>
        <TextInput 
          style={styles.input1}
          onChangeText={inputUser}
          placeholder={"Username"}
        />
        <TextInput 
          style={styles.input1}
          onChangeText={inputPass}
          placeholder={"Password"}
          secureTextEntry={true}
        />
        <TextInput 
          style={styles.input1}
          onChangeText={inputValidPass}
          placeholder={"Validate Password"}
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleSignup}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>
        <Text style={styles.createNewText}>Returning User?</Text>
        <TouchableOpacity onPress={bringLoginScreen}>
          <Text style={styles.clickableText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    </View>
  )
}
