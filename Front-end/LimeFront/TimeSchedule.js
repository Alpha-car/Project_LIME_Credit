import React, {Component} from "react";
import { View, Text, Button, navigation } from "react-native";

export default function TimeSchedule({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>어,, 재밌네,,</Text>
            <Text>시간표</Text>
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
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