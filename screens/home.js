import React, { useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from '../shared/styles';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [imageURI, setImageURI] = React.useState(null);
  const [imageHeight, setImageH] = React.useState();
  const [imageWidth, setImageW] = React.useState();
  const [data, setData] = React.useState([]);
  const [state, setState] = React.useState([]);
  const [error, setError] = React.useState("");
  const user = navigation.getParam("user");

  useEffect(() => {
    // initial grab when app is loaded to set image URIs
    getData1();
  }, []);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: false,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if(!result.canceled){
      setImageURI(result.assets[0].uri);
      setImageH(result.assets[0].height);
      setImageW(result.assets[0].width);
    };
  };

  function storageHandler() {
    axios.post("http://192.168.1.181:4545/imgfile", {
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
    axios.get("http://192.168.1.181:4545/imagefiles")
    .then((response) => {
      const myObjects = response.data;
      setData(myObjects);
    });
  };

  function getData(){
    setState([]);
    axios.get("http://192.168.1.181:4545/imagefiles").then((response) => {
      const myObjects = response.data;
      setData(myObjects);
    });
    for(let i = 0; i < data.length; i++){
      if(data[i].user == user){
        setState((state) => [...state, data[i]]);
      }else{
        console.log("no data found!");
        setError("No data found for user.");
      };
    };
    console.log("logging state array", state);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewBottomBorder}>
        <Image
          style={styles.smallLogo}
          source={require("../assets/cloudupload.png")}
        />
        <Text style={styles.titleText1}>File System Home</Text>
      </View>
      <TouchableOpacity onPress={getData}>
        <View style={{margin: 15}}>
          <Image source={require("../assets/refresh.png")} style={{ height: 25, width: 25 }} />
          <Text style={styles.headerText1}>Click here to see currently stored images.</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={pickImage}>
        <View style={{margin: 15}}>
          <Image source={require("../assets/addition.png")} style={{ height: 25, width: 25 }} />
          <Text style={styles.headerText1}>Click here to upload an image to the application.</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={ () => setError("") }>
        <Text style={styles.errorText}>{error}</Text>
      </TouchableOpacity>
        {imageURI && (
          <>
          <View style={{alignSelf: 'center'}}>
            <Text style={styles.headerText2}>Click on the image to upload it to your account.</Text>
          </View>
          <View style={{ width: 350, height: 200, alignSelf: "center", margin: 15 }}>
            <TouchableOpacity onPress={storageHandler}>
              <Image source={{ uri: imageURI }} style={{ width: 350, height: 200, margin: 10 }} />
            </TouchableOpacity>
          </View>
          </>
        )}
        {state && (
          <View style={{ width: 900, height: 600, alignSelf: "center" }}>
            <FlatList
              data={state}
              keyExtractor={(item) => item.id}
              numColumns={3}
              renderItem={({ item }) => (
                <Image source={{ uri: item.imageURI }} style={{ width: 250, aspectRatio: 3 / 2, margin: 10 }} />
              )}
            />
          </View>)}  
    </View>
  );
}