import * as React from 'react';

//npm
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//screen
import Login from '../screen/Login';
import App from '../../App';
import Admin from '../screen/Admins/Admin';
import User from '../screen/User/User';



const PrimaryStack = ({
}) => {


  const Stack = createStackNavigator();

  const initalRouteName = "App";

  const screenOption = {
    headerShown: false
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={screenOption}
        initialRouteName={initalRouteName}
      >
        <Stack.Screen component={App} name={"App"} />
        <Stack.Screen component={Login} name={"Login"} />
        <Stack.Screen component={User} name={"User"} />
        <Stack.Screen component={Admin} name={"Admin"} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default PrimaryStack;
