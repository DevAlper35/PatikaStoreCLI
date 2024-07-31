import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

export default function UrunCard({urunler}) {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri:urunler.imgURL}}/>
      <Text style={styles.title}>{urunler.title}</Text>
      <Text style={styles.price}>{urunler.price}</Text>
      <Text style={styles.stock}>{urunler.inStock?"":"STOKTA YOK"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    margin:5,
    borderRadius:5,
    borderWidth:1,
    width:"45%",
    
  },
  img:{
    width : Dimensions.get("window").width / 2-100,
    aspectRatio : 1,
    alignSelf: "center"
  },
  title:{
    fontWeight: "bold",
    color: "black"
  },
  price:{
    color: "grey"
  },
  stock:{
    color: "red",
    fontWeight: "bold",
    fontSize:14
  }
})