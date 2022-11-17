import React, { useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Button } from 'react-native';
import styles from '../shared/styles';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default function HomeScreen({ navigation }) {

  const [imageURI, setImage0] = React.useState(null);
  const [data, setData] = React.useState([]);
  const user = navigation.getParam('user');

  // useEffect(() => {
  //   getData()
  // }, [])

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage0(result.assets[0].uri);
    }
  };

  function storageHandler(){

    console.log("Sending IMG to DB.")
    axios.post('http://192.168.1.181:4545/imgfile', {
      user: user,
      imageURI: imageURI,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  };

  function getData(){
    axios.get('http://192.168.1.181:4545/imagefiles')
    .then((response) => {
      const myObjects = response.data;
      setData(myObjects);
    });
    console.log(data);
  };

  function testing(){
    setImage0(data[0].imageURI);
  }

  return (
    <View style={styles.container}>

      <View style={styles.viewBottomBorder}>
        <Image style={styles.smallLogo} source={require('../assets/cloudupload.png')}/>
        <Text style={styles.titleText1}>File System Home</Text>
      </View>

      <View>
        <Button title="test" onPress={testing} />
        <Button title="senddata" onPress={storageHandler} />
        <Button title="getdata" onPress={getData} />
        <Button title="Pick an image to upload." onPress={pickImage} />
        {imageURI && <Image source={{ uri: imageURI }} style={{ width: 200, height: 200 }} />}
      </View>

    </View>
  )
}