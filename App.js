// App.js
import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import CustomButton from './CustomButton';
import Credit_Logo from './assets/images/Credit_Logo.png';
import VectorImage from 'react-native-vector-image';
import Impact from './assets/fonts/Impact.ttf';
import ImageResizer from 'react-native-image-resizer';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>header</Text>
        </View>
        <View style={styles.logo}>
        <Image
          source={Credit_Logo}
        />
        </View>

        <View style={styles.content}></View>
        
        <View style={styles.footer}>
          <CustomButton 
            buttonColor={'#BBD64D'}
            title="로그인"
            // when click the button
            onPress={() => alert('회원가입 단추를 클릭하였다.')}/>
          <CustomButton />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
  header: {
    width:'100%',
    height:'20%',
    scale: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width:'100%',
    height:'15%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  content: {
    //fontFamily: 'Impact',    
    width: '100%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  footer: {
    width:'100%',
    height:'20%',
    backgroundColor: '#ffffff',
  },
});