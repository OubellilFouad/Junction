import React from 'react'
import { Image, ImageBackground, Text, TouchableHighlight, View } from 'react-native'
import bg from '../../assets/bg.png';
import user from '../../assets/user.jpg';

const Profile = () => {
  return (
    <View style={{
        width: '100%',
        alignItems: 'center'
    }}>
        <View style={{
                width: 120,
                height: 120,
                borderRadius: 150/2,
        }}>
            <Image source={user} resizeMode={'cover'} style={{
                width: '100%',
                height: '100%',
                borderRadius: 150/2,
            }}/>
        </View>
        <View style={{
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 32,
                color: 'white'
            }}>Esther Howard</Text>
            <Text style={{
                fontSize: 14,
                color: '#9D9D9D'
            }}>Esther.Howard.26@email.com</Text>
        </View>

        <TouchableHighlight style={{
            marginTop: 42,
            paddingVertical: 14,
            paddingHorizontal: 28,
            backgroundColor: '#15257C',
            borderRadius: 40
        }}>
            <Text style={{
                fontSize: 18,
                color: 'white'
            }}>
                Edit profile
            </Text>
        </TouchableHighlight>
    </View>
  )
}

export default Profile