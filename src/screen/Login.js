import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

//components
import CustomButton from '../components/CustomButton/CustomButton';

//npm
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

// styles
import { styles } from './loginStyle';


const Login = ({
  navigation
}) => {

  //states
  const [emailAddress, setEmailAddress] = React.useState('');
  const [isLoading, setloading] = React.useState(false);
  const [showErroText, setShowErrorText] = React.useState(false);
  const [errorText, setErrorText] = React.useState('')


  //function
  const onChangeText = (text) => {
    setEmailAddress(text);
  }

  const checkUserExistenceinFB = () => {
    if (emailAddress.length > 0) {
      setloading(true);
      auth().signInWithEmailAndPassword(emailAddress, "admin123")
        .then(() => {
          setShowErrorText(false);
          getUserFromFireStore();
        })
        .catch(error => {
          setloading(false);
          if (error.code === 'auth/invalid-email') {
            setShowErrorText(true);
            setErrorText("Invalid Email Format");
          }
          else if (error.code === 'auth/user-not-found') {
            setShowErrorText(true);
            setErrorText("Enter Email not registerd");
          }
          console.log("[checkUserExistenceinFB]", error);
        });
    }
  }


  const getUserFromFireStore = async () => {
    const response = await firestore().collection('User').get()
      .then(query => {
        query.forEach(doc => {
          if (doc.data().email === emailAddress && doc.data().role === 'admin') {
            navigateToAdmin();
          }
          else if (doc.data().email === emailAddress && doc.data().role === 'user') {
            navigateToUser();
          }
        })
      }).catch(error => {
        console.log("getUserFromFireStore[]", error);
      })
  }

  const navigateToUser = () => {
    navigation.navigate('User');
    setloading(false);

  }

  const navigateToAdmin = () => {
    navigation.navigate('Admin');
    setloading(false);

  }

  return (
    <View style={styles.container}>
      <Text style={[styles.welcom, { marginTop: 30 }]}>Welcome</Text>
      <Text style={styles.welcom}>Login</Text>


      <View style={styles.middleCon}>


        <View>
          <TextInput
            placeholder="Enter Email Address"
            onChangeText={text => onChangeText(text)}
            style={styles.textInputStyle}
          />
          {
            showErroText
            &&
            <Text style={styles.errortxt}>{errorText}</Text>
          }

        </View>

        <CustomButton
          text="Sign In"
          btnStyle={styles.btn}
          textStyle={styles.text}
          loading={isLoading}
          onpress={checkUserExistenceinFB}
        />

      </View>


    </View>
  );
};

export default Login;

