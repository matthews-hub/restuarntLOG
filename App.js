import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LandingPage from './components/landingpage';
import LogIn from './components/logIn';
import SignIn from './components/signIn';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LandingPage/> */}
      <SignIn/>
      {/* <LogIn/> */}
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
