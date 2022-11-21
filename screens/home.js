import React, { useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Button, FlatList } from 'react-native';
import styles from '../shared/styles';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default function HomeScreen({ navigation }) {

  const [imageURI, setImageURI] = React.useState(null);
  const [imageHeight, setImageH] = React.useState();
  const [imageWidth, setImageW] = React.useState();
  const [data, setData] = React.useState([]);
  const user = navigation.getParam('user');
  const userImgData = new Array();

  const dummydata = [
    {
      id: 0,
      name: 'testname',
    },
    {
      id: 1,
      name: 'testname1',
    },
    {
      id: 2,
      name: 'testname2',
    },
  ]

  useEffect(() => {
    // initial grab when app is loaded to set image URIs
    getData1()
  }, [])

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled){
      setImageURI(result.assets[0].uri);
      setImageH(result.assets[0].height);
      setImageW(result.assets[0].width);
    };
  };

  function storageHandler(){
    console.log(imageHeight);
    console.log(imageWidth);
    console.log("Sending IMG to DB.")
    axios.post('http://192.168.1.181:4545/imgfile', {
      user: user,
      imageURI: imageURI,
      imageHeight: imageHeight,
      imageWidth: imageWidth,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  function getData1(){
    axios.get('http://192.168.1.181:4545/imagefiles')
    .then((response) => {
      const myObjects = response.data;
      setData(myObjects);
    });
  }

  function getData(){
    axios.get('http://192.168.1.181:4545/imagefiles')
    .then((response) => {
      const myObjects = response.data;
      setData(myObjects);
    });
    //console.log(data);
    for(let i = 0; i < data.length; i++){
      if(data[i].user == user){
        userImgData.push(data[i]);
      }else{
        console.log('no data found!');
      };
    };
    console.log(userImgData);
  };

  function testing(){

  };

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
        {/* {imageURI && <Image source={{ uri: imageURI }} style={{ width: imageWidth, height: imageHeight }} />}
        <View style={{width: 300, height: 300,}}>
          {userImgData && (<FlatList
          data={userImgData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.headerText}>{item.id}</Text>
            //<Image source={{ uri: item.imageURI}} style={{ width: 200, height: 200 }} />
          )}
          />)}
        </View>
        {userImgData && <Text>Testing please work</Text>} */}
      </View>

    </View>
  )
}