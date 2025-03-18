import { View, Text,TextInput,StyleSheet } from 'react-native'
import React from 'react'

const InputBox = ({
    inputTitle,
    secureTextEntry = false,
    keyboardType,
    autoComplete,
    value,
    setValue,

}) => {
  return (
    <View>
      <Text>{inputTitle}</Text>
      <TextInput style={styles.inputBox}
      autoCorrert = {false}
      keyboardType = {keyboardType}
      autoComplete = {autoComplete}
      secureTextEntry ={secureTextEntry}
      value = {value}
      onChangeText = {(text) => setValue(text)}/>
    </View>
  );
};
const styles = StyleSheet.create({
    inputBox:{
        height:40,
        marginBottom:20,
        backgroundColor:"#ffffff",
        borderRadius:10,
        marginTop:10,
        paddingLeft:10,
        color:"#af9f85"

    }

});

export default InputBox