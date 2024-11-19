import React, { useState } from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import hampi from '../../assets/images/hampi.jpg';
import murudeshwara from '../../assets/images/murudeshwar-beach.jpg';
import golgumbaz from '../../assets/images/golgumbaz.jpg';
import Header from './Header';



const Home = () => {
  const [filter, setFilter] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);

  const places = [
    { name: 'Stone Chariot', location: 'Hampi', image: hampi, tags: ['Historic', 'Temple'] },
    { name: 'Gol Gumbaz', location: 'Vijayanagara', image: golgumbaz, tags: ['Historic'] },
    { name: 'Murudeshwara', location: 'Uttara Kannada', image: murudeshwara, tags: ['Beach', 'Temple'] },
  ];

  const filteredPlaces = filter === 'All'
    ? places
    : places.filter((place) => place.tags.includes(filter));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Header />

      {/* Cities Section */}
      <View style={{ paddingHorizontal: 16, paddingVertical: 8 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[
            { name: 'Mangalore', image: require('../../assets/images/manglore.jpg') },
            { name: 'Mysore', image: require('../../assets/images/mysore.jpg') },
            { name: 'Bengaluru', image: require('../../assets/images/bengluru.jpg') },
            { name: 'Vijayanagara', image: require('../../assets/images/hampi.jpg') },
            { name: 'Shivamogga', image: require('../../assets/images/shivamogga.jpg') },
          ].map((city, index) => (
            <TouchableOpacity key={index} style={{ marginRight: 12, alignItems: 'center' }}>
              <View
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 32,
                  backgroundColor: '#e5e7eb',
                  overflow: 'hidden',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image source={city.image} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
              </View>
              <Text style={{ fontSize: 12, color: '#6b7280', marginTop: 4 }}>{city.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Filter Section */}
      <View style={{ paddingHorizontal: 16, paddingVertical: 8, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#e5e7eb' }}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={{
            backgroundColor: '#f97316',
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 24,
            alignItems: 'center',
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Popular Places Section */}
      <ScrollView style={{ flex: 1, paddingHorizontal: 16 }}>
        <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Popular Places</Text>
        <Text style={{ color: '#6b7280', fontSize: 14, marginBottom: 16 }}>
          Let's find out the best places
        </Text>

        <Modal visible={modalVisible} transparent={true} animationType="slide">
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ backgroundColor: 'white', width: 256, padding: 16, borderRadius: 8 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>Filter Places</Text>
              {['All', 'Historic', 'Mountain', 'Beach', 'Temple'].map((type) => (
                <TouchableOpacity
                  key={type}
                  onPress={() => {
                    setFilter(type);
                    setModalVisible(false);
                  }}
                  style={{ marginBottom: 8 }}
                >
                  <Text style={{ textAlign: 'center', fontWeight: filter === type ? 'bold' : 'normal' }}>
                    {type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </Modal>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flexDirection: 'row' }}>
            {filteredPlaces.map((place, index) => (
              <TouchableOpacity key={index} style={{ width: 160, marginRight: 16 }}>
                <View style={{ position: 'relative' }}>
                  <Image source={place.image} style={{ height: 160, width: '100%', borderRadius: 8 }} />
                </View>
                <Text style={{ marginTop: 8, fontWeight: 'bold' }}>{place.name}</Text>
                <Text style={{ color: '#f97316', marginTop: 4 }}>{place.location}</Text>
                <Text style={{ marginTop: 4, fontWeight: 'bold', textDecorationLine: 'underline' }}>View More</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default Home;
