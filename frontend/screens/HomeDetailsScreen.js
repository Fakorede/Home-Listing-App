import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';

const HomeDetailsScreen = () => {

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.title}>Modern 3-bedroom apartment</Text>
        </View>
        <View>
          <Image source={require('../assets/images/house.png')} style={styles.image} />
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Home Type: </Text>
          <Text style={styles.value}>Duplex</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Price: </Text>
          <Text style={styles.value}>$150,000</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Year Built: </Text>
          <Text style={styles.value}>2021</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Address: </Text>
          <Text style={styles.value}>1, Fab Est.</Text>
        </View>
        <View style={styles.group}>
          <Text style={styles.label}>Description: </Text>
          <Text style={styles.value}>Lorem Ipsum</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20
  },
  heading: {
    marginHorizontal: 20,
    marginBottom: 10
  },
  title: {
    fontSize: 24
  },
  image: {
    width: '100%',
    height: 200
  },
  group: {
    marginHorizontal: 20,
    marginVertical: 10,
    flexDirection: 'row'
  },
  label: {
    fontSize: 18
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    flexShrink: 1
  }
});

export default HomeDetailsScreen;