import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { 
    SafeAreaView,
    Text, 
    View,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Stack = createNativeStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Main' component={Main} options={{headerShown:false}} />
                <Stack.Screen name='Home' component={HomeScreen} />
                <Stack.Screen name='Profile' component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
      );
}


function Main({ route, navigation}) {
    return (
        <SafeAreaView style={{
            backgroundColor: '#FFF',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
        }}>
            <View>
                <Text style={{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#515151'
                }}>Welcome!</Text>
            </View>
            <TouchableOpacity 
                onPress={() => navigation.navigate('Home')}
            style={{
                marginTop: 250,
                padding: 20,
                backgroundColor: 'green',
                borderRadius: 5,
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <Text>Let's Begin</Text>
                <Icon name='arrow-forward-ios' size={20} color='#fff' />
            </TouchableOpacity>
      </SafeAreaView>
    )
  }


export default App;