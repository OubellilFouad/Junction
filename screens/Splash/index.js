import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import bg from '../../assets/bg.png';
import Splashs from '../../assets/splash.svg'

const Splash = () => {
  const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('Home')
  }
  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            paddingVertical: 32,
            paddingHorizontal: 12,
            gap: 40
        }}>
            <Splashs width='70%'/>
            <View style={{
                alignItems: "center",
                gap: 5
            }}>
                <Text style={{
                    fontSize: 25,
                    color: 'white'
                }}>welcome to</Text>
                <Text style={{
                    fontSize: 36,
                    color: 'white'
                }}>AI Assistant</Text>
                <Text style={{
                    fontSize: 14,
                    color: 'white',
                    fontWeight: '400',
                    textAlign: 'center'
                }}>designed to simplify your life and bring advanced technology to your fingertips</Text>
            </View>
            <TouchableHighlight style={{
                backgroundColor:'#15257C',
                paddingVertical: 12,
                paddingHorizontal: 41,
                borderRadius: 40
            }} onPress={handleClick}>
                <Text style={{
                    color: 'white',
                    fontSize: 17
                }}>Get Started</Text>
            </TouchableHighlight>
        </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
export default Splash