import * as React from 'react';
import { Text, StyleSheet ,View } from 'react-native';

import RoundButton from './CustomButton';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
      <RoundButton />
    </View>
  );
}