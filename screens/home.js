import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../shared/styles';
//import Icon from 'react-native-vector-icons/Ionicons'

export default function HomeScreen({ navigation }) {

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
      <View style={styles.viewLeftBorder}>
        <Text style={styles.headerText}>Sorting</Text>
        <View style={styles.smallerHorizontalLine}></View>
        <Text style={styles.smallerHeaderText}>Name</Text>
        <Text style={styles.smallerHeaderText}>Files First</Text>
        <Text style={styles.smallerHeaderText}>Folders First</Text>
        <Text style={styles.smallerHeaderText}>Last Opened</Text> 
      </View>
    </View>
  )
}