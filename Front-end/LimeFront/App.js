// App.js
import React, {Component} from 'react';
import {Button} from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './Login';
import TimeSchedule from './TimeSchedule';

const Stack = new createNativeStackNavigator();

export default class App extends Component {
    render() {
        return (
            <NavigationContainer independent={true}>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                    <Stack.Screen name="TimeSchedule" component={TimeSchedule} 
                        options={{ 
                            title: '시간표 추가',
                            headerBackTitleVisible: false,
                            headerRight: () => (
                                <Button
                                    onPress={() => alert('검색창 띄울 예정,,,')}
                                    title = "search"
                                />
                            )}} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}