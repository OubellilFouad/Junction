import React, { useEffect, useRef, useState } from 'react'
import { Image, TextInput, TouchableHighlight, View, Keyboard } from 'react-native'
import email from '../../assets/email.png';
import keyboard from '../../assets/keyboard.png';
import mic from '../../assets/mic.png';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Bottom = () => {
  const [open,setOpen] = useState(false);
  const input = useRef();
  const handlePress = () => {
    setOpen(!open);
    Keyboard.dismiss()
  }
  return (
    <View style={{
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
    }}>
        <View style={{
        display: !open?'flex':'none',
        flexDirection: 'row',
        gap: 70,
        justifyContent: 'center',
        padding: 17|0,
        alignItems: 'center'
        }}>
            <Image source={email}/>
            <View style={{
                display: 'flex',
                width: 66,
                height: 66,
                backgroundColor: '#1556AB',
                borderRadius: 66/2,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 3,
                borderColor: '#14389D'
            }}>
                <FontAwesome5 name="microphone" size={24} color="white" />
            </View>
            <TouchableHighlight onPress={() => {
                setOpen(!open)
                
            }}>
                <Image source={keyboard}/>
            </TouchableHighlight>
        </View>
        <View style={{
            width: '100%',
            position: 'relative',
            display: open?'flex':'none'
        }}>
            <TextInput 
            ref={input}
            placeholder='Type something'
            placeholderTextColor={'#9D9D9D'}
            style={{
                padding: 20,
                paddingLeft: open?20:0,
                backgroundColor: '#220845',
                width: '100%',
                color: '#9D9D9D',
            }}/>
            <Ionicons name="md-send-sharp" size={24} style={{
                position: 'absolute',
                right: 20,
                top: '50%',
                transform: [{translateY: -12}]
            }} color="white" onPress={() => handlePress()}/>
        </View>
    </View>
  )
}

export default Bottom