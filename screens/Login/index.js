import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Button, ImageBackground, StyleSheet, View } from 'react-native'
import bg from '../../assets/bg.png';

const Login = () => {
    const navigation = useNavigation();
  const handleClick = () => {
    navigation.navigate('Home')
  }  
  return (
    <ImageBackground source={bg} resizeMode="cover" style={styles.container}>
        <View style={{
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Button title='Click me' onPress={handleClick}/>
        </View>
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
export default Login