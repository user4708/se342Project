import React, { useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import styles from '../shared/styles';
import axios from 'axios';

export default function LoginScreen({ navigation }) {

  const [user, inputUser] = React.useState("");
  const [pass, inputPass] = React.useState("");
  const account = {user, pass};
  const [data, setData] = React.useState([]);
  const [errorText, setText] = React.useState("");

  useEffect(() => {
    // initial grab when app is loaded to set users info in database to data array
    getData()
  }, [])

  function getData(){
    axios.get('http://192.168.1.181:4545/accounts')
    .then((response) => {
      const myObjects = response.data;
      setData(myObjects);
    });
    console.log(data);
  }

  function loginHandler(){

    getData();

    if(user == "" || pass == ""){
      setText("Username or password was null value.");
      console.log("Username or password was null value.")
    }else{
      for(let i = 0; i < data.length; i++){
        if(user == data[i].username){
          console.log("Username found at index ", i);
          const userFound = true;
          if(userFound){
            // validate password
            if(pass == data[i].password){
              // login succesful
              console.log("Login succesful as user: ", user);
              HomeNav();
            }else{
              setText("Invalid password for user");
              console.log("Invalid password for user: ", user);
            }
        }
        }
      }
    }
  }

  function creAccNav(){
    navigation.navigate('CreateAccount');
  }

  function HomeNav(){
    navigation.push('Home', account);
  }

  return (
    <View style={styles.container}>
      <View style={styles.createCenterBox}>
        <Image style={styles.createLogo} source={require('../assets/cloudupload.png')}/>
        <Text style={styles.titleText}>Secure Cloud Systems</Text>
        <TextInput
          style={styles.input}
          onChangeText={inputUser}
          placeholder={"Username"}
          maxLength={16}
        />
        <TextInput
          style={styles.input}
          onChangeText={inputPass}
          placeholder={"Password"}
          maxLength={16}
          //secureTextEntry={true}
        />
        {/* <TouchableOpacity>
          <Text style={styles.clickableText}>Forgot Password?</Text>
        </TouchableOpacity> */}
        <Text style={styles.createNewText}>New?</Text>
        <TouchableOpacity onPress={creAccNav}>
          <Text style={styles.clickableText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={loginHandler}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.errorText}>{errorText}</Text>
      </View>
    </View>
  )
}