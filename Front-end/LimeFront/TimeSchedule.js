import React, {Component} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button, navigation } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Login from './Login';
import Home from './Home';
import Profile from './Profile';
import Food from './Food';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Text>어,, 재밌네,,</Text>
        <Text>시간표</Text>
        {/* <Button title="Go back" onPress={() => navigation.popToTop()} /> */}
    </View>
  );
}

const Tab = createBottomTabNavigator();

function BottomTabs () {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}
                options = {{
                    title: "Home",
                    headerShown: false
                }} />
            <Tab.Screen name="Profile" component={Profile} 
                options = {{
                    title: "Profile",
                    headerShown: false
                }} />
            <Tab.Screen name="Food" component={Food} 
                options = {{
                    title: "Food",
                    headerShown: false
                }} />        
            <Tab.Screen name="Settings" component={SettingsScreen} 
                options = {{
                    title: "Settings",
                    headerShown: false
                }} />
        </Tab.Navigator>
    );
}

export default function TimeSchedule({ navigation }) {
    return (
        <NavigationContainer independent={true}>
            <BottomTabs />
        </NavigationContainer>
    );
}





// export default class TimeSchedule extends Component () => {
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text>Profile screen</Text>
//                 <Text>시간표</Text>
//                 <Button title="Go back" onPress={() => navigation.goBack()} />
//             </View>
            
            
//         )
//     }
// }