import { StyleSheet,
   Text,
   Pressable,
    View,
    SafeAreaView,
    Image,
    KeyboardAvoidingView,
    TextInput 
  } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white" ,alignItems:"center"}}>
      <View>
        <Image
         source={require('../assets/images/3536452.jpg')} style={{ width: 300, height: 150, borderRadius: 100 }} 
        />
        
      </View>
      <KeyboardAvoidingView>
        <View style={{alignItems:"center"}}>
          <Text style={{fontSize:17,fontWeight:"bold",marginTop:12 ,color:"black"}}>Login in to your Account</Text>
        </View>
        <View style={{marginTop:70}}>
            <View 
            style={{
              flexDirection:"row",
              alignItems:"center",
              borderColor:"lightgray",
              width:300,
              height:40,
              borderRadius:10,
              backgroundColor:"lightgray",
              gap:5}}>
            <AntDesign style={{marginLeft:5}} name="mail" size={24} color="gray" />
            <TextInput 
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={{marginVertical:10}}
            placeholder='example@gmail.com'/>
            </View>
        </View>
        <View style={{marginTop:40}}>
        <View 
            style={{
              flexDirection:"row",
              alignItems:"center",
              borderColor:"lightgray",
              width:300,
              height:40,
              borderRadius:10,
              backgroundColor:"lightgray",
              gap:5
              }}>
            <AntDesign style={{marginLeft:5}} name="lock1" size={24} color="gray" />
            <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{marginVertical:10}}
            placeholder='••••••••' secureTextEntry={true}/>
            </View>
        </View>
        <View style={{marginTop:12,flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
          <Text>Keep me logged in</Text>
          <Text style={{color:"blue"}}>Forgot Password</Text>
        </View>
        <View style={{marginTop:40}}>
              <Pressable style={{width:200,borderRadius:10,backgroundColor:"#FEBE10",alignItems:"center",justifyContent:"center",marginLeft:"auto",marginRight:"auto",height:40}}>
                <Text style={{fontSize:17,fontWeight:"bold",color:"white"}}>Login</Text>
              </Pressable>
              <Pressable
                onPress={() => navigation.navigate("Register")}
                style={{ marginTop: 15 }}
              >
              <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
                    Don't have an account? Sign Up
              </Text>
        </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})