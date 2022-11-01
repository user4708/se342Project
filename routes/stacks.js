import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import createAccountScreen from '../screens/createaccount';
import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';

const screens = {
  Login: {
    screen: LoginScreen
  },
  CreateAccount: {
    screen: createAccountScreen
  },
  Home: {
    screen: HomeScreen
  }
};

const Stack = createStackNavigator(screens);

export default createAppContainer(Stack)