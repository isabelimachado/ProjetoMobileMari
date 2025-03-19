import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

export default function App() {
  return (
    <Login/>      
  );
}
