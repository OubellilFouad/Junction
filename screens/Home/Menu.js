import React, { useEffect, useRef, useState } from 'react'
import { Animated, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { useProvider } from '../../context/Provider';

const obj = [
    {text:'New chat',icon:<Ionicons name="add-circle-outline" size={30} color="white" />, router: 'Main'},
    {text:'Chat History',icon:<MaterialIcons name="history" size={30} color="white" />, router: 'History'},
    {text:'Send an email',icon:<MaterialIcons name="email" size={30} color="white" />, router: 'Email'},
    {text:'Profile',icon:<Ionicons name="md-person-circle-outline" size={30} color="white" />, router: 'Profile'},
]

const Menu = () => {
  const {setOpenMenu,openMenu,setRoute,route} = useProvider();  
  const anime = useRef(new Animated.Value(-1000)).current
  useEffect(() => {
    if(openMenu){
      Animated.timing(anime, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }else{
      Animated.timing(anime, {
        toValue: -1000,
        duration: 800,
        useNativeDriver: true,
      }).start();
    }
  }, [openMenu]);
  return (
    <Animated.View style={[styles.container, {transform: [{translateY: anime}]}]}>
        <View style={styles.title}>
            <Text style={{
                color: 'white',
                fontSize: 18
            }}>Settings</Text>
            <AntDesign name="close" size={30} color="white" onPress={() => setOpenMenu(false)}/>
        </View>
        {obj.map((ob,index) => {
            const {text,icon,router} = ob;
            return(
                <TouchableHighlight onPress={() => {
                    setRoute(router);
                    console.log(route);
                    setOpenMenu(false)
                }} key={index} style={styles.item}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 12
                    }}>
                        {icon}
                        <Text style={{fontSize:18,color:'white'}}>
                            {text}
                        </Text>
                    </View>
                </TouchableHighlight>
            )
        })}
        <View style={styles.logout}>
            <MaterialIcons name="logout" size={25} color="white" />
            <Text style={{
                color: 'white',
                fontSize: 16
            }}>Logout</Text>
        </View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#131941',
        display: 'flex',
        gap: 32,
        position: 'absolute',
        padding: 30,
        top: 0,
        width: '100%',
        zIndex: 2,
        borderBottomEndRadius: 12,
        borderBottomLeftRadius: 12,
        overflow: 'hidden',
    },
    title:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    item:{
        backgroundColor: '#15257C',
        borderRadius: 12,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },
    logout:{
        gap: 10,
        flexDirection: 'row',
        padding: 12
    }
})

export default Menu