import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';

const screens = {
    Home: {
        screen: Home,
    },
}

const HomeStack = new createNativeStackNavigator(screens);

export default NavigationContainer(HomeStack);