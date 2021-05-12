import React from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';

//style
import { styles } from './AdminStyle.js';

//components
import CustomButton from '../../components/CustomButton/CustomButton';

//npm
import UserData from '../../components/UserData/UserData.js';

//service
import * as Service from './AdminService';
import UserDeleteModal from '../../components/UserDeleteModal/UserDeleteModal.js';

const Admin = ({
  params,
}) => {

  //states
  const [userData, setUserData] = React.useState([]);
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const isMounted = React.useRef(true);

  const [showModal, setShowModal] = React.useState(false);

  //ref
  const flatListRef = React.useRef(null);

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
      <UserData
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

  const onContentSizeChange = () => {
    flatListRef?.current?.scrollToEnd();
  };

  return (
    <View style={styles.container}>

      <View style={{ flex: 0.9 }}>
        <FlatList
          ref={flatListRef}
          onContentSizeChange={onContentSizeChange}
          data={userData}
          renderItem={renderItem}
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
          ListEmptyComponent={renderEmptyList}
          refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refreshAllUserData} colors={["#ffd871"]} />}
          keyExtractor={item => item?.id?.toString()}
        />
      </View>

      <View style={{ flex: 0.1, justifyContent: 'flex-end' }}>
        <CustomButton
          text="Add Contact"
          onpress={() => setShowModal(true)}
        />
      </View>

      <UserDeleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        setUserData={setUserData}
        userData={userData}
      />
    </View>
  );
}
export default Admin;
