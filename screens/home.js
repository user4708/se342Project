import React from 'react';
import { Text, View, Image, TouchableOpacity, Button } from 'react-native';
import styles from '../shared/styles';
import * as ImagePicker from 'expo-image-picker';

export default function HomeScreen({ navigation }) {

  const [image0, setImage0] = React.useState(null);
  const [image1, setImage1] = React.useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsMultipleSelection: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage0(result.assets[0].uri);
      setImage1(result.assets[1].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewBottomBorder}>
        <Image style={styles.smallLogo} source={require('../assets/cloudupload.png')}/>
        <Text style={styles.titleText1}>File System Home</Text>
      </View>
      <View style={styles.viewRightBorder}>
        <Text style={styles.headerText}>Structure</Text>
        <View style={styles.smallerHorizontalLine}></View>
        {/* <Icon name="Home" size={20} /> */}
        <Text style={styles.smallerHeaderText}>Home</Text>
      </View>
      <View style={styles.homeContainer}>
        <Button title="Pick an image from camera roll" onPress={pickImage} />
        {image0 && <Image source={{ uri: image0 }} style={{ width: 200, height: 200 }} />}
        {image1 && <Image source={{ uri: image1 }} style={{ width: 200, height: 200 }} />}
      </View>
      {/* <View style={styles.viewLeftBorder}>
        <Text style={styles.headerText}>Sorting</Text>
        <View style={styles.smallerHorizontalLine}></View>
        <Text style={styles.smallerHeaderText}>Name</Text>
        <Text style={styles.smallerHeaderText}>Files First</Text>
        <Text style={styles.smallerHeaderText}>Folders First</Text>
        <Text style={styles.smallerHeaderText}>Last Opened</Text> 
      </View> */}
    </View>
  )
}