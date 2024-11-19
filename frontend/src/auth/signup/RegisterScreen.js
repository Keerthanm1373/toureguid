import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RegistrationSVG from '../../../assets/images/image.png';

const RegisterScreen = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const validateFullName = () => {
    if (fullName.trim() === '') {
      setFullNameError('Please enter your name');
    } else if (fullName.length < 3) {
      setFullNameError('Full name must be at least 3 characters long.');
    } else {
      setFullNameError('');
    }
  };

  const validateEmail = () => {
    if (email.trim() === '') {
      setEmailError('Please enter your email');
    } else {
      const emailRegex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
      if (!emailRegex.test(email)) {
        setEmailError('Please enter a valid email address.');
      } else {
        setEmailError('');
      }
    }
  };

  const validatePassword = () => {
    if (password.trim() === '') {
      setPasswordError('Please enter a password');
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const validateConfirmPassword = () => {
    if (confirmPassword.trim() === '') {
      setConfirmPasswordError('Please confirm your password');
    } else if (confirmPassword !== password) {
      setConfirmPasswordError('Passwords do not match.');
    } else {
      setConfirmPasswordError('');
    }
  };

  const handleRegister = () => {
    validateFullName();
    validateEmail();
    validatePassword();
    validateConfirmPassword();

    if (
      !fullNameError &&
      !emailError &&
      !passwordError &&
      !confirmPasswordError &&
      fullName.length >= 3 &&
      password.length >= 8 &&
      confirmPassword === password
    ) {
      navigation.navigate('Login');
    }
  };

  return (
    <SafeAreaView className="flex-1 justify-center">
      <ScrollView showsVerticalScrollIndicator={false} className="px-6">
        <View className="items-center">
          <Image
            source={RegistrationSVG}
            style={{ height: 300, width: 300, transform: [{ rotate: '-5deg' }] }}
          />
        </View>

        <Text className="text-4xl font-medium text-gray-800 mb-8">Register</Text>
        <Text className="text-center text-gray-500 mb-8">Or, register with email ...</Text>

        {fullNameError ? (
          <Text className="text-red-500 mb-2">{fullNameError}</Text>
        ) : null}
        <View className="flex-row border-b border-gray-300 pb-2 mb-6">
          <Ionicons name="person-outline" size={20} color="#666" style={{ marginRight: 5 }} />
          <TextInput
            placeholder="Full Name"
            className="flex-1 py-0"
            value={fullName}
            onChangeText={(text) => {
              setFullNameError('');
              setFullName(text);
            }}
            onBlur={validateFullName}
          />
        </View>

        {emailError ? (
          <Text className="text-red-500 mb-2">{emailError}</Text>
        ) : null}
        <View className="flex-row border-b border-gray-300 pb-2 mb-6">
          <MaterialIcons name="alternate-email" size={20} color="#666" style={{ marginRight: 5 }} />
          <TextInput
            placeholder="Email ID"
            keyboardType="email-address"
            className="flex-1 py-0"
            value={email}
            onChangeText={(text) => {
              setEmailError('');
              setEmail(text);
            }}
            onBlur={validateEmail}
          />
        </View>

        {passwordError ? (
          <Text className="text-red-500 mb-2">{passwordError}</Text>
        ) : null}
        <View className="flex-row border-b border-gray-300 pb-2 mb-6">
          <Ionicons name="ios-lock-closed-outline" size={20} color="#666" style={{ marginRight: 5 }} />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            className="flex-1 py-0"
            value={password}
            onChangeText={(text) => {
              setPasswordError('');
              setPassword(text);
            }}
            onBlur={validatePassword}
          />
        </View>

        {confirmPasswordError ? (
          <Text className="text-red-500 mb-2">{confirmPasswordError}</Text>
        ) : null}
        <View className="flex-row border-b border-gray-300 pb-2 mb-6">
          <Ionicons name="ios-lock-closed-outline" size={20} color="#666" style={{ marginRight: 5 }} />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            className="flex-1 py-0"
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPasswordError('');
              setConfirmPassword(text);
            }}
            onBlur={validateConfirmPassword}
          />
        </View>

        <TouchableOpacity onPress={handleRegister} className="bg-purple-700 p-5 rounded-lg mb-8">
          <Text className="text-center font-bold text-lg text-white">Register</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mb-8">
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="text-purple-700 font-semibold"> Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;