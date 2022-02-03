// App.js
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LoginView from './src/components/Login/LoginView';
import TimeSchedule from './TimeSchedule';

const Stack = new createNativeStackNavigator();

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="LoginView" component={LoginView} options={{headerShown: false}}/>
                    <Stack.Screen name="TimeSchedule" component={TimeSchedule}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}