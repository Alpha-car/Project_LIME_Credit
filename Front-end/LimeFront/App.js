// App.js
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './home';
import TimeSchedule from './TimeSchedule';

const Stack = new createNativeStackNavigator();

export default class App extends Component {
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                    <Stack.Screen name="TimeSchedule" component={TimeSchedule}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}