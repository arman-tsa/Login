import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


//npm
import auth from '@react-native-firebase/auth';
import CustomButton from './src/components/CustomButton/CustomButton';

const App = ({
  params,
  navigation
}) => {

  //states

  const navigateToLogin = () => {
    navigation.navigate("Login");
  }

  return (
    <View style={styles.container}>

      <CustomButton
        text="Login as Admin"
        onpress={navigateToLogin}
      />

      <CustomButton
        text="Login as User"
        onpress={navigateToLogin}

      />

    </View>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  }
});