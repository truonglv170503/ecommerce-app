import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import store from "./store";
import { Provider } from "react-redux";
import { UserContext } from "./UserContext";
import { ModalPortal } from 'react-native-modals';
function App(){
    return(
        <Provider store={store}>
            <UserContext>
                <StackNavigator />
                <ModalPortal/>
            </UserContext>
            
        </Provider>
    )
};



export default App