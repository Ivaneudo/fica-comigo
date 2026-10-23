import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CheckInScreen } from '../screens/CheckInScreen';
import { RegulationScreen } from '../screens/RegulationScreen';
import { ChatScreen } from '../screens/ChatScreen';
import { NextStepsScreen } from '../screens/NextStepsScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }}>
      <Stack.Screen name="CheckIn" component={CheckInScreen} />
      <Stack.Screen name="Regulation" component={RegulationScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="NextSteps" component={NextStepsScreen} />
    </Stack.Navigator>
  );
};