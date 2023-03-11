import { NavigationContainer } from '@react-navigation/native';
import { ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Provider } from './context/Provider';
import Home from './screens/Home';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';

export default function App() {
  const Nav = createStackNavigator();
  return (
    <Provider>
        <NavigationContainer>
          <Nav.Navigator>
            <Nav.Screen name='Login' component={Login} options={{
              headerShown: false,
            }} />
            <Nav.Screen name='Home' component={Home} options={{
              headerShown: false,
            }} />
          </Nav.Navigator>
        </NavigationContainer>
      <StatusBar style='light'/>
    </Provider>
  );
}

