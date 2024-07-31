import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../assets/doggy.jpg')}
            style={styles.avatar}
          />
          <TouchableOpacity style={styles.pencilIcon}>
            <Icon name="pencil" size={20} color="gray" />
          </TouchableOpacity>
        </View>
        <Text style={styles.name}>Doggy</Text>
        <Text style={styles.email}>doggy@gmail.com</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    marginTop: -5,
    padding: 40,
    backgroundColor: '#E2C46A',
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  pencilIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff', 
    borderRadius: 20,
    padding: 2,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  email: {
    fontSize: 14,
    color: 'white',
  },
});

export default CustomDrawerContent;

