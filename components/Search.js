import React from 'react';
import { View, TextInput } from 'react-native';

export default function Search() {
  return (
    <View style={{
      borderWidth: 1,
      marginVertical: 12,
      paddingHorizontal: 5,
      borderRadius: 5,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 1,
    }}>
      <TextInput placeholder='Search for competition' />
    </View>
  )
}
