import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/auth/login/LoginScreen';
import RegisterScreen from './src/auth/signup/RegisterScreen';
import { AppNavigator } from './src/Navigation'; // Ensure this is correctly exported
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          {/* Login Screen */}
          <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={{ headerShown: false }} 
          />
          {/* Register Screen */}
          <Stack.Screen 
            name="Register" 
            component={RegisterScreen} 
            options={{ headerShown: false }} 
          />
          {/* AppNavigator replaces HomeScreen */}
          <Stack.Screen 
            name="Home" 
            component={AppNavigator} 
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
      <StatusBar style="dark" />
    </>
  );
}
