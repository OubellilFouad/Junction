import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useProvider } from '../../context/Provider'

const Main = () => {
  const {data} = useProvider();  
  return (
    <View>
      <FlatList 
        data={data}
        keyExtractor={(item,index) => index.toString()}
        renderItem={({item}) => {
            const {type,text} = item;
            return(
                <View>
                    <Text style={{color:'white'}}>
                        {text}
                    </Text>
                </View>
            )
        }}
      />
    </View>
  )
}

export default Main