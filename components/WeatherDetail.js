// components/WeatherDetail.js (Özel Bileşen)

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Bu bileşen, App.js'ten gelen props'ları (location, temperature vb.) kullanır
const WeatherDetail = (props) => {
  return (
    <View style={styles.container}>
      {/* props ile gelen verileri kullanıyoruz */}
      <Text style={styles.location}>{props.location}</Text>
      <Text style={styles.temp}>{props.temperature} °C</Text>
      <Text style={styles.desc}>{props.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 10,
    alignItems: 'center',
    // Mavi arka planla uyumlu, şeffaf beyaz kart
    backgroundColor: 'rgba(255, 255, 255, 0.2)', 
    borderRadius: 10,
    width: '85%',
  },
  location: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  temp: {
    fontSize: 60,
    fontWeight: '300',
    color: '#fff',
  },
  desc: {
    fontSize: 18,
    color: '#fff',
    marginTop: 5,
  },
});

export default WeatherDetail;