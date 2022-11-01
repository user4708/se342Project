import React from 'react';
import { Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import styles from '../shared/styles';

export default function createAccountScreen({ navigation }) {

  const [user, inputUser] = React.useState("");
  const [pass, inputPass] = React.useState("");
  const [validPass, inputValidPass] = React.useState("");
  const [fName, inputFName] = React.useState("");
  const [lName, inputLName] = React.useState("");
  const [mInit, inputMInit] = React.useState("");
  const [bDay, inputbDay] = React.useState("");
//  const [isSubmit, setSubmit] = React.useState(false);

  const pressHandler = () => {
    navigation.navigate('Login')
  }

  // React.useEffect(() => {
  //   const authenticate = async() => {
  //     axios.post(link, JSON.stringify({
  //       username: user,
  //       password: pass,
  //       f_name: fName,
  //       mi: mInit,
  //       l_name: lName,
  //       birthdate: bDay
  //     })
  //     )
  //     .then((response) => {
  //       setSubmit(false);
  //       console.log(response);
  //     }).catch((err) => {
  //      console.log(err);
  //     });
  //   };
  //   if (isSubmit) authenticate();
  // }, [isSubmit]);

  // const usernameHandler = (text) => {
  //   //validate here
  //   inputUser(text);
  // }

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
        <TextInput 
          style={styles.input1}
          onChangeText={inputMInit}
          placeholder={"Middle Initial"}
        />
        <TextInput 
          style={styles.input1}
          onChangeText={inputLName}
          placeholder={"Last Name"}
        />
        <TextInput 
          style={styles.input1}
          onChangeText={inputbDay}
          placeholder={"Birthdate"}
        />
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
        />
        <TextInput 
          style={styles.input1}
          onChangeText={inputValidPass}
          placeholder={"Validate Password"}
        />
        <TouchableOpacity style={styles.loginButton} onPress={pressHandler}>
          <Text style={styles.loginText}>Submit</Text>
        </TouchableOpacity>
        <Text style={styles.createNewText}>Returning User?</Text>
        <TouchableOpacity onPress={pressHandler/*() => setSubmit(true)*/}>
          <Text style={styles.clickableText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
