import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { categoriesData } from '../../data/CategoriesData'
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Categories = () => {
  return (
    <View>
      {categoriesData?.map((item) => (
            <View key={item._id}>
                <TouchableOpacity>
                    <FontAwesome name={item.icon}/>
                    <Text>{item.name}</Text>
                </TouchableOpacity>
            </View>
        ))}
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        padding: 5,
        flexDirection: "row",
      },
      catContainer: {
        padding: 15,
        justifyContent: "center",
        alignItems: "center",
      },
      catIcon: {
        fontSize: 30,
        verticalAlign: "top",
      },
      catTitle: {
        fontSize: 12,
      },

})
export default Categories;