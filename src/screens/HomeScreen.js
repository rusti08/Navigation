import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

function Home({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
          <Text>Home Screen</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Text>Go to Profile</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Home