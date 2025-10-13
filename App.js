// App.js (Son Hali: Props Kullanımı)

import React from 'react';
import { StyleSheet, View } from 'react-native';
// Yeni oluşturduğumuz bileşeni içeri aktarıyoruz
import WeatherDetail from './components/WeatherDetail'; 

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* 1. Şehir: Van verilerini props ile gönderiyoruz */}
      <WeatherDetail 
        location="Van" 
        temperature={12} 
        description="Kar Yağışlı" 
      />

      {/* 2. Şehir: İstanbul verilerini props ile gönderiyoruz */}
      <WeatherDetail 
        location="İstanbul" 
        temperature={19} 
        description="Güneşli" 
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    // Mor renk
    backgroundColor: '#6A5ACD', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20, 
  },
});