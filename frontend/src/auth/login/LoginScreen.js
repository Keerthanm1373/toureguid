import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from 'react-native';
import Toast from 'react-native-toast-message';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import LoginSVG from '../../../assets/images/image.png';

const LoginScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const validateEmail = (text) => {
    setFormData((prev) => ({ ...prev, email: text }));
    if (emailError && text !== '') {
      setEmailError(''); // Clear email error while typing if it was previously set
    }
  };

  const validatePassword = (text) => {
    setFormData((prev) => ({ ...prev, password: text }));
    if (passwordError && text !== '') {
      setPasswordError(''); // Clear password error while typing if it was previously set
    }
  };

  const handlePasswordFocus = () => {
    if (!formData.email) {
      setEmailError('Please enter email');
    } else {
      const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
      if (!emailRegex.test(formData.email)) {
        setEmailError('Please enter a valid email address.');
      }
    }
    setIsPasswordFocused(true);
  };

  const handleLoginPress = () => {
    let valid = true;
  
    if (!formData.email) {
      setEmailError('Please enter email');
      valid = false;
    } else {
      const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
      if (!emailRegex.test(formData.email)) {
        setEmailError('Please enter a valid email address.');
        valid = false;
      }
    }
  
    if (!formData.password) {
      setPasswordError('Please enter the password');
      valid = false;
    }
  
    if (valid) {
      // Show toast message
      Toast.show({
        type: 'success',
        text1: 'Login Successful',
        text2: 'Welcome back!',
      });
  
      // Redirect to Home after showing the toast
      setTimeout(() => {
        navigation.navigate('Home');
      }, 1500); // Adjust delay to match toast duration
    }
  };
  

  return (
    <SafeAreaView className="flex-1 justify-center">
      <View className="px-6">
        <View className="items-center">
          <Image
            source={LoginSVG}
            style={{ height: 300, width: 300, transform: [{ rotate: '-5deg' }] }}
          />
        </View>

        <Text className="font-roboto-medium text-2xl font-medium text-gray-800 mb-8">
          Login
        </Text>

        {emailError ? <Text className="text-red-500 mb-2">{emailError}</Text> : null}
        <View className="flex-row border-b border-gray-300 pb-2 mb-6">
          <MaterialIcons name="alternate-email" size={20} color="#666" style={{ marginRight: 5 }} />
          <TextInput
            placeholder="Email ID"
            keyboardType="email-address"
            className="flex-1 py-0"
            value={formData.email}
            onChangeText={validateEmail}
          />
        </View>

        {passwordError && isPasswordFocused ? (
          <Text className="text-red-500 mb-2">{passwordError}</Text>
        ) : null}
        <View className="flex-row border-b border-gray-300 pb-2 mb-6">
          <Ionicons name="ios-lock-closed-outline" size={20} color="#666" style={{ marginRight: 5 }} />
          <TextInput
            placeholder="Password"
            secureTextEntry={!showPassword}
            className="flex-1 py-0"
            value={formData.password}
            onChangeText={validatePassword}
            onFocus={handlePasswordFocus}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text className="text-purple-600 font-semibold">
              {showPassword ? 'Hide' : 'Show'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={handleLoginPress}
          className="bg-purple-700 p-5 rounded-lg mb-8"
        >
          <Text className="text-center font-bold text-lg text-white">Login</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mb-8">
          <Text className="underline">New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text className="text-purple-600 font-semibold"> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;