import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './HomeScreen';
import CartScreen from './CartScreen';
import CustomDrawerContent from './CustomDrawerContent.js';
import DashboardScreen from './Dashboard.js';
import { StyleSheet, View, Text } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import store from './store';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  const cartCount = useSelector((state) => state.cart.cartCount);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#E2C46A',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 14 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <View>
              <Icon name="shopping-cart" color={color} size={size} />
              {cartCount > 0 && (
                <View style={styles.cartCountContainer}>
                  <Text style={styles.cartCountText}>{cartCount}</Text>
                </View>
              )}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Quick Buys"
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          screenOptions={{
            drawerActiveTintColor: '#E2C46A',
            drawerInactiveTintColor: 'gray',
            drawerLabelStyle: {
              fontSize: 14,
            },
          }}
        >
          <Drawer.Screen
            name="Quick Buys"
            options={{
              drawerIcon: ({ color, size }) => (
                <Icon name="home" color={color} size={size} />
              ),
              drawerLabel: 'Home',
              headerStyle: {
                backgroundColor: '#E2C46A',
              },
              headerTitleStyle: {
                color: '#000',
              },
              headerRight: () => (
                <View style={styles.headerRightContainer}>
                  <Icon name="bell" size={20} color="#000" />
                </View>
              ),
            }}
          >
            {props => <BottomTabs {...props} />}
          </Drawer.Screen>
          <Drawer.Screen
            name="Cart"
            component={CartScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Icon name="shopping-cart" color={color} size={size} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  cartCountContainer: {
    position: 'absolute',
    right: -10,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartCountText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  headerRightContainer: {
    marginRight: 15,
  },
});













// import React, { useState } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import HomeScreen from './HomeScreen';
// import CartScreen from './CartScreen';
// import { StyleSheet, View, Text } from 'react-native';
// import { Provider, useSelector, useDispatch } from 'react-redux';
// import store from './store.js';

// const Drawer = createDrawerNavigator();
// const Tab = createBottomTabNavigator();

// function HomeScreenWrapper({ setCartCount }) {
//   return <HomeScreen setCartCount={setCartCount} />;
// }

// function BottomTabs({ cartCount, setCartCount }) {
//   return (
//     <Tab.Navigator
//       screenOptions={{
//         tabBarActiveTintColor: '#E2C46A',
//         tabBarInactiveTintColor: 'gray',
//         tabBarLabelStyle: { fontSize: 14 },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         children={() => <HomeScreenWrapper setCartCount={setCartCount} />}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Cart"
//         component={CartScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <View>
//               <Icon name="shopping-cart" color={color} size={size} />
//               {cartCount > 0 && (
//                 <View style={styles.cartCountContainer}>
//                   <Text style={styles.cartCountText}>{cartCount}</Text>
//                 </View>
//               )}
//             </View>
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// export default function App() {
//   const [cartCount, setCartCount] = useState(0);

//   return (
//     <NavigationContainer>
  
//       <Drawer.Navigator 
//         initialRouteName="Quick Buys"
//         screenOptions={{
//           drawerActiveTintColor: '#E2C46A',
//           drawerInactiveTintColor: 'gray',
//           drawerLabelStyle: {
//             fontSize: 14,
//           },
//         }}
//       >
//         <Drawer.Screen
//           name="Quick Buys"
//           options={{
//             drawerIcon: ({ color, size }) => (
//               <Icon name="home" color={color} size={size} />
//             ),
//             drawerLabel: 'Home',
//             headerStyle: {
//               backgroundColor: '#E2C46A',
//             },
//             headerTitleStyle: {
//               color: '#000',
//             },
//             headerRight: () => (
//               <View style={styles.headerRightContainer}>
//                 <Icon name="bell" size={20} color="#000" />
//               </View>
//             ),
//           }}
//         >
//           {props => <BottomTabs {...props} cartCount={cartCount} setCartCount={setCartCount} />}
//         </Drawer.Screen>
//         <Drawer.Screen
//           name="Cart"
//           component={CartScreen}
//           options={{
//             drawerIcon: ({ color, size }) => (
//               <Icon name="shopping-cart" color={color} size={size} />
//             ),
//           }}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   cartCountContainer: {
//     position: 'absolute',
//     right: -10,
//     top: -5,
//     backgroundColor: 'red',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   cartCountText: {
//     color: 'white',
//     fontSize: 12,
//     fontWeight: 'bold',
//   },
//   headerRightContainer: {
//     marginRight: 15,
//   },
// });
