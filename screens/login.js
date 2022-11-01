import React, { useEffect } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../shared/styles';
import axios from "axios";

export default function LoginScreen({ navigation }) {

  const [user, inputUser] = React.useState("");
  const [pass, inputPass] = React.useState("");

  const pressHandler = () => {
    console.log(user, pass);
    navigation.navigate('Home');
  }

  const pressHandler1 = () => {
    navigation.navigate('CreateAccount');
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
        />
        <TouchableOpacity>
          <Text style={styles.clickableText}>Forgot Password?</Text>
        </TouchableOpacity>
        <Text style={styles.createNewText}>New?</Text>
        <TouchableOpacity onPress={pressHandler1}>
          <Text style={styles.clickableText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={pressHandler}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}