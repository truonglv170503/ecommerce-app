import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

const Footer = () => {
  return (
    <View>
      <Text>Footer</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 10,
    },
    menuContainer: {
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      fontSize: 25,
      color: "#000000",
    },
    iconText: {
      color: "#000000",
      fontSize: 10,
    },
    active: {
      color: "blue",
    },
  });
export default Footer