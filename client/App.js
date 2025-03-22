import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import StackNavigator from './navigation/StackNavigator';
function App(){
    const Stack = createNativeStackNavigator()
    return(
        <><StackNavigator/></>
    )
};



export default App