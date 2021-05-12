import React from 'react';
import { Platform, Text, UIManager, View } from 'react-native';

//styles
import { styles } from './UserDataShowStyle'

const UserDataShow = ({
  params,
  name,
  contact,
  email,
}) => {

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
      </View>

      <Text style={styles.email}>{email}</Text>
      <Text style={styles.contact}>{contact}</Text>
    </View>
  );
}
export default React.memo(UserDataShow);
