import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I love you</Text>
      <Image 
      source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
      style={styles.img}
      ></Image>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "blue",
    fontSize: 20
  }, 
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2
  }
})

export default App;
