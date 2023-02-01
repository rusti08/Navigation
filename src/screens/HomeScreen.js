import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function Home({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <View>
          <Text>Home Screen</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default Home