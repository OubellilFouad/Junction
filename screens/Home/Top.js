import React from 'react'
import { Image, TouchableHighlight, View } from 'react-native'
import open from '../../assets/open.png';
import settings from '../../assets/settings.png';
import { useProvider } from '../../context/Provider';
const Top = () => {
  const {setOpenMenu,openMenu} = useProvider();
  const handlePress = () => {
    setOpenMenu(true);
    console.log(openMenu)
  }
  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      padding: 28|24,
    }}>
        <Image source={open}/>
        <TouchableHighlight onPress={() => handlePress()}>
        <Image source={settings}/>
        </TouchableHighlight>
  </View>
  )
}

export default Top