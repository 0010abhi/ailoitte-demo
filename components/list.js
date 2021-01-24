import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const data = [{ id: 1, desc: '111111' }, { id: 2, desc: '222222' }, { id: 3, desc: '333333' }, { id: 4, desc: '444444' }]

export default function List({ name, direction, navigation }) {
  return (
    <View style={{ display: 'flex'}}>
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{ marginVertical: 8 }}><Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>{name}</Text></View>
        <View style={{ marginVertical: 8 }}><Text style={{ color: '#fff', fontSize: 16 }}>see all</Text></View>
      </View>
      <ScrollView horizontal={(direction === 'horizontal') ? true : false} style={{
        display: 'flex',
        flexDirection: (direction === 'horizontal') ? 'row' : 'column',
        overflow: 'scroll',
        height: (direction === 'horizontal') ? 220 : 250,
      }}>
        {
          data.map((datum, index) => (
            
              <TouchableOpacity key={index} onPress={() => {
                navigation.navigate('CardDetails')
              }} style={{
                display: 'flex',
                borderRadius: 12,
                margin: 12,
                marginLeft: 0,
                padding: 12,
                backgroundColor: '#fff',
                height: (direction === 'horizontal') ? 200 : 150,
                width: (direction === 'horizontal') ? 200 : '100%',
              }}>
                <Text>{datum.id}</Text>
                <Text>{datum.desc}</Text>
              </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  )
}