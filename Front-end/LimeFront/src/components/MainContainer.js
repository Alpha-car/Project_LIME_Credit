import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import Timetable from './Timetable/TimeTableView'
import Login from './Login/LoginView'

//Screen names
const TimetableName = "Main";
const LoginName = "Login";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={TimetableName}
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === TimetableName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn === LoginName) {
                        iconName = focused ? 'settings' : 'settings-outline'
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                })}
                screenOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'grey',
                labelStyle: { paddingBottom: 10, fontSize: 10 },
                style: { padding: 10, height: 70}
                }}>

                <Tab.Screen name={TimetableName} component={Timetable} />
                <Tab.Screen name={LoginName} component={Login} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}