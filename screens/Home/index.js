import React, {useEffect, useRef, useState} from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import Bottom from './Bottom'
import Menu from './Menu'
import Top from './Top'
import bg from '../../assets/bg.png';

const Home = () => {

  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
      <View style={{
        flex: 1
      }}>
        <Menu/>
        <Top/>
        <Bottom/>
    </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Home