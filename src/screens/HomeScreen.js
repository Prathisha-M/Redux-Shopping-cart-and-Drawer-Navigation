import React from 'react';
import { View, Text, FlatList, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartActions';
import CarouselComponent from './CarouselComponent';
import Blackwhite from '../assets/Blackwhite.jpg';
import Caralina from '../assets/Caralina.jpg';
import CropTop from '../assets/CropTop.jpg';
import Sweater from '../assets/Sweater.jpg';

const products = [
  { id: '1', name: 'Women Crop Striped T Shirt', price: '₹479', originalPrice: '₹599', image: Blackwhite },
  { id: '2', name: 'Nike Carolina spellout Hoodie', price: '₹579', originalPrice: '₹699', image: Caralina },
  { id: '3', name: 'Ditsy Print Scruchie Fit Top', price: '₹996', originalPrice: '₹1,199', image: CropTop },
  { id: '4', name: 'Drop Shoulder Sweater', price: '₹1,139', originalPrice: '₹1,299', image: Sweater },
];

const HomeScreen = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart());
    console.log(`${product.name} added to cart`);
  };

  const renderProduct = ({ item }) => (
    <View style={styles.product}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.strikethroughPrice}>{item.originalPrice}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => handleAddToCart(item)}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.contain}>
    <CarouselComponent />
    </View>

    
      {/* <CarouselComponent /> */}
      <View style={styles.contain1}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

  },
  contain1: {
    flex: 3,
  },
  container: {
    flex: 1,
    padding: 20,
  },
  list: {
    alignItems: 'center',
  },
  product: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    width: '100%',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  strikethroughPrice: {
    fontSize: 14,
    color: 'red',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  price: {
    fontSize: 14,
    color: 'green',
  },
  button: {
    backgroundColor: '#E2C46A',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
  },
});

export default HomeScreen;











// import React from 'react';
// import { View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
// import Blackwhite from '../assets/Blackwhite.jpg';
// import Caralina from '../assets/Caralina.jpg';
// import CropTop from '../assets/CropTop.jpg';
// import Sweater from '../assets/Sweater.jpg';

// const products = [
//   { id: '1', name: 'Women Crop Striped T Shirt', price: '₹479', originalPrice: '₹599', image: Blackwhite },
//   { id: '2', name: 'Nike Carolina spellout Hoodie', price: '₹579', originalPrice: '₹699', image: Caralina },
//   { id: '3', name: 'Ditsy Print Scruchie Fit Top', price: '₹996', originalPrice: '₹1,199', image: CropTop },
//   { id: '4', name: 'Drop Shoulder Sweater', price: '₹1,139', originalPrice: '₹1,299', image: Sweater },
// ];

// const HomeScreen = ({ setCartCount }) => {
//   const [cartCount, setLocalCartCount] = React.useState(0);

//   const addToCart = (product) => {
//     setLocalCartCount(cartCount + 1);
//     if (setCartCount) setCartCount(cartCount + 1);
//     console.log(`${product.name} added to cart`);
//   };

//   const renderProduct = ({ item }) => (
//     <View style={styles.product}>
//       <Image source={item.image} style={styles.image} />
//       <View style={styles.info}>
//         <Text style={styles.name}>{item.name}</Text>
//         <View style={styles.priceContainer}>
//           <Text style={styles.strikethroughPrice}>{item.originalPrice}</Text>
//           <Text style={styles.price}>{item.price}</Text>
//         </View>
//         <TouchableOpacity style={styles.button} onPress={() => addToCart(item)}>
//           <Text style={styles.buttonText}>Add to Cart</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={products}
//         renderItem={renderProduct}
//         keyExtractor={(item) => item.id}
//         contentContainerStyle={styles.list}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   list: {
//     alignItems: 'center',
//   },
//   product: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 5,
//     padding: 10,
//     width: '100%',
//   },
//   image: {
//     width: 100,
//     height: 100,
//     marginRight: 10,
//   },
//   info: {
//     flex: 1,
//   },
//   name: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   priceContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   strikethroughPrice: {
//     fontSize: 14,
//     color: 'red',
//     textDecorationLine: 'line-through',
//     marginRight: 10,
//   },
//   price: {
//     fontSize: 14,
//     color: 'green',
//   },
//   button: {
//     backgroundColor: '#E2C46A',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center'
//   },
//   buttonText: {
//     color: '#000',
//   },
// });

// export default HomeScreen;
