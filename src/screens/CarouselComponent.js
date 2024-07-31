import React from 'react';
import { View, Dimensions, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';


const images = [
  require('../assets/Foryou.jpg'),
  require('../assets/sale.jpg'),
  require('../assets/shopping.jpg'),
];

const CarouselComponent = () => {
  const { width } = Dimensions.get('window');
  const height = width * 0.4;

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item} style={[styles.image, { height }]} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        data={images}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width * 0.8}
        // containerCustomStyle={styles.carouselContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  
  },
//   carouselContainer: {
//     height: 600, // Set the desired height here
//   },
  item: {
    width: '100',
    height: '400',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default CarouselComponent;
