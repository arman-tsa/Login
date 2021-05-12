import React from 'react';
import { Text, View, FlatList, RefreshControl } from 'react-native';
import UserData from '../../components/UserData/UserData';
import UserDataShow from '../../components/UserDataShow/UserDataShow';

//service
import * as Service from './UserService';

//style
import { styles } from './UserStyle'

const User = ({
  params,
}) => {

  //states
  const [userData, setUserData] = React.useState([]);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const isMounted = React.useRef(true);

  React.useEffect(() => {
    getUserData();

    return () => isMounted.current = false;
  }, []);

  //functions

  const getUserData = async () => {
    try {
      setIsRefreshing(true);
      const response = (await Service.getAllUserData()).data;
      if (isMounted.current) {
        setUserData(response.UserDetails);
      }
      setIsRefreshing(false);
    } catch (error) {
      setIsRefreshing(false);
    }
  }

  const renderItem = ({ item, index }) => {
    return (
      <UserDataShow
        name={item.name}
        email={item.email}
        contact={item.contact}
        id={item.id}
        userData={userData}
        setUserData={setUserData}
      />
    )
  }

  const renderEmptyList = () => {
    return (
      <View style={styles.nodataCon}>
        {
          Array.isArray(userData)
          &&
          userData.length === 0
          &&
          <Text>No data Available</Text>
        }
      </View>
    )
  }

  const refreshAllUserData = () => {
    getUserData();
  }

  return (
    <View style={styles.con}>
      <FlatList
        data={userData}
        renderItem={renderItem}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        ListEmptyComponent={renderEmptyList}
        refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refreshAllUserData} colors={["#ffd871"]} />}
        keyExtractor={item => item?.id?.toString()}
      />
    </View>
  );
}
export default User;
