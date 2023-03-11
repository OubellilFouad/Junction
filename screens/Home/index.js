import React, {useEffect, useRef, useState} from 'react'
import { ImageBackground, StyleSheet, View } from 'react-native'
import Bottom from './Bottom'
import Menu from './Menu'
import Top from './Top'
import bg from '../../assets/bg.png';
import Profile from '../Profile'
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useProvider } from '../../context/Provider'
import Main from '../Main'

const Home = () => {
  const {setOpenMenu,openMenu,setRoute,route} = useProvider(); 
  const navigation = useNavigation();
  const router = useRoute();
  useEffect(() => {
    navigation.setParams({
      path: route,
    })
    console.log(router.params["path"])
  },[route])
  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
      <View style={{
        flex: 1
      }}>
        <Menu/>
        <Top/>
        {router.params["path"] === 'Profile' && (<Profile/>)}
        {router.params["path"] === 'Main' && (<Main/>)}
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