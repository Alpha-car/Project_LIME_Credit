import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { Settings, LoginManager, Profile } from 'react-native-fbsdk-next';
import HelloApi from '../../api/HelloApi';

// 이 페이지는 로그인 창과 메인 화면 연결이 아직 안 되어있기 때문에 만들어놓은 임시 페이지입니다.
Settings.initializeSDK();

import CustomButton from './CustomButton';
import Credit_Logo from '../assets/images/Credit_Logo.png';

export default class LoginView extends Component {
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

                <View style={styles.footer}>
                    <CustomButton
                        buttonColor={'#BBD64D'}
                        title="로그인"
                        // when click the button
                        onPress={() => HelloApi.getHello()
                            .then(response => response.text())
                            .then(data => alert(data))}/>
                </View>

                <View style={styles.footer}>
                    <CustomButton
                        buttonColor={'#BBD64D'}
                        title="페이스북 로그인"
                        // when click the button
                        onPress={() =>
                            LoginManager.logInWithPermissions(["public_profile"]).then(
                                function(result) {
                                    if (result.isCancelled) {
                                        alert("Login cancelled");
                                    } else {
                                        alert(
                                            "Login success with permissions: " +
                                            result.grantedPermissions.toString()
                                        );
                                        Profile.getCurrentProfile().then(
                                            function(currentProfile) {
                                                if (currentProfile) {
                                                    alert("The current logged user is: " +
                                                        currentProfile.name
                                                        + ". His profile id is: " +
                                                        currentProfile.userID
                                                    );
                                                }
                                            }
                                        );
                                    }
                                },
                                function(error) {
                                    alert("Login fail with error: " + error);
                                }
                            )}/>
                </View>

                <View style={styles.footer}>
                    <CustomButton
                        buttonColor={'#BBD64D'}
                        title="시간표로 이동"
                        // when click the button
                        onPress={() => this.props.navigation.navigate('Main')}/>
                </View>
                <View style={styles.footer}>
                    <CustomButton
                        buttonColor={'#BBD64D'}
                        title="회원가입"
                        // when click the button
                        onPress={() => this.props.navigation.navigate('SignUp')}/>
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
        width: '100%',
        height: '20%',
        scale: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    logo: {
        width: '100%',
        height: '15%',
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
        width: '100%',
        height: '20%',
        backgroundColor: '#ffffff',
    },
});