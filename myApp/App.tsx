import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import GetStarted from './src/screens/GetStarted';
import Logon from './src/screens/Logon';
import SignIn from './src/screens/signIn';

export default function App() {
  return (
    <>
      <SignIn />
      <StatusBar style="light" translucent />
    </>
  );
}


