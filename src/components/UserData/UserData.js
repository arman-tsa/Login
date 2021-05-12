import React from 'react';
import { Text, View, TouchableOpacity, UIManager, Platform, LayoutAnimation } from 'react-native';

//style
import { styles } from './UserDataStyle';

//svg
import Delete from '../../assets/svg/Delete';

const UserData = ({
  params,
  name,
  contact,
  email,
  id,
  userData,
  setUserData
}) => {

  const removeUserFromDB = async () => {
    LayoutAnimation.configureNext({
      duration: 300,
      create: { type: 'linear', property: 'opacity' },
      update: { type: 'spring', springDamping: 1 },
      delete: { type: 'linear', property: 'opacity', duration: 1 }
    })
    const response = userData.filter((e, i) => e.id !== id);
    setUserData(response);
  }

  React.useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);


  return (
    <View
      style={styles.con}>

      <View style={styles.row}>
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity
          onPress={removeUserFromDB}
          activeOpacity={0.5}
          style={{ padding: 8 }}
        >
          <Delete />
        </TouchableOpacity>
      </View>

      <Text style={styles.email}>{email}</Text>
      <Text style={styles.contact}>{contact}</Text>
    </View>
  );
}
export default React.memo(UserData);
