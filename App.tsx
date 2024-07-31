import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import urunler from './src/UrunData.json';
import UrunCard from './src/UrunCard';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Patika Store</Text>
        <Text style={styles.find}>Ara...</Text>
        <FlatList
          data={urunler}
          numColumns={2}
          showsVerticalScrollIndicator = {false}
          renderItem={({item}) => <UrunCard urunler={item}/>}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    alignSelf: "center"
  },
  title:{
    padding:10,
    fontSize:32,
    color: "darkmagenta",
    fontWeight:"800"
  },
  find:{
    padding:10,
    color:"grey",
    fontSize:18,
  }
});

export default App;
