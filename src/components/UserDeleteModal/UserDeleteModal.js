import React from 'react';
import { Modal, Text, View, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Dimensions } from 'react-native';
import CustomButton from '../CustomButton/CustomButton';



const UserDeleteModal = ({
  showModal,
  setShowModal,
  setUserData,
  userData
}) => {

  const width = Dimensions.get('screen').width;


  //states
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [number, setNumber] = React.useState('');

  //function

  const setClearState = () => {
    setNumber('');
    setName('');
    setEmail('');
  }

  const saveData = () => {
    const newUserData = {
      name: name,
      email: email,
      contact: number,
      id: Math.random()
    }
    if (name.length > 0 || email.length > 0 || number.length > 0) {
      setUserData([...userData, newUserData]);
      setShowModal(false);
      setClearState()
    }
  }

  return (
    <Modal
      transparent={true}
      statusBarTranslucent={true}
      visible={showModal}
      onRequestClose={() => {
        setShowModal(false)
      }}
    >
      <View style={{ flex: 1, backgroundColor: '#00000066', justifyContent: 'center', alignItems: 'center' }}>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={-150}>
          <View style={{ backgroundColor: 'white', width: width - 40, borderRadius: 10 }}>

            <View style={{
              backgroundColor: "#ffd871",
              padding: 14,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10
            }}>
              <Text style={{
                fontSize: 18,
                color: "#161616",
              }}>Add / Edit</Text>
            </View>


            <View style={styles.textinputcontainer}>
              <TextInput
                placeholder="Enter Name"
                placeholderTextColor={"#161616"}
                style={styles.align}
                onChangeText={text => setName(text)}
              />
            </View>
            <View style={styles.textinputcontainer}>
              <TextInput
                placeholder="Entner Email"
                placeholderTextColor={"#161616"}
                style={styles.align}
                onChangeText={text => setEmail(text)}

              />
            </View>
            <View style={[styles.textinputcontainer, { marginBottom: 20 }]}>
              <TextInput
                placeholder="Enter Contact Number"
                placeholderTextColor={"#161616"}
                style={styles.align}
                onChangeText={text => setNumber(text)}
                keyboardType="number-pad"
                maxLength={10}
              />
            </View>

            <CustomButton
              text="Save"
              onpress={saveData}
            />

          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
}
export default UserDeleteModal;

const styles = StyleSheet.create({
  current: {
    paddingLeft: 10,
    fontSize: 14,
    color: "#161616",
  },
  currentcontainer: {
    marginTop: 20,
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'center',
    marginBottom: 30
  },
  textinputcontainer: {
    borderWidth: 1,
    borderColor: "#161616",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 5
  },
  align: {
    paddingLeft: 10
  }

})
