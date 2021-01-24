import 'react-native-gesture-handler';
import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from './src/components/Search';
import List from './src/components/list';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LOREM_IPSUM = `It is a long established fact that a reader will be distracted by the 
readable content of a page when looking at its layout. The point of using Lorem Ipsum is that 
it has a more-or-less normal distribution of letters, as opposed to using Content here, 
content here, making it look like readable English. Many desktop publishing packages and web 
page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum.`;

const Stack = createStackNavigator();

function CardDetails({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: '#0f3362' }}>
      <View style={{ display: 'flex', flexDirection: 'row', height: 50 }}>
        <TouchableOpacity
          onPress={() => { navigation.goBack() }}
          style={{ height: '100%', display: 'flex', width: 50, justifyContent: 'center', alignItems: 'center', }}>
          <Text style={{ color: '#fff', fontSize: 20 }}>{'<-'}</Text>
        </TouchableOpacity>
        <View style={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ marginLeft: -25, fontSize: 18, fontWeight: 'bold', color: '#fff' }}>Details</Text>
        </View>
      </View>
      <View style={{ display: 'flex', backgroundColor: '#fff', borderRadius: 15, padding: 15, marginTop: 15, overflow: 'scroll' }}>
        <View style={{ height: 150, borderWidth: 1, marginBottom: 8, }}></View>
        <View style={{ display: 'flex', height: 35, flexDirection: 'row', justifyContent: 'center' }}>
          {
            [1, 2, 3].map((datum, index) => (<View key={index} style={{ height: 10, width: 10, borderRadius: 5, margin: 5, borderWidth: 1, backgroundColor: (index === 1) ? '#000' : '#fff' }}></View>))
          }
        </View>
        <Text style={{ flexGrow: 1, marginBottom: 15 }}>{LOREM_IPSUM}</Text>
        <TouchableOpacity style={{ backgroundColor: '#f5c043', alignItems: 'center', borderRadius: 25, padding: 15, marginVertical: 8 }}>
          <Text style={{ fontWeight: 'bold', color: '#fff' }}>View Existing Submissions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: '#0f3362', alignItems: 'center', borderRadius: 25, padding: 15, marginVertical: 8 }}>
          <Text style={{ fontWeight: 'bold', color: '#fff' }}>Upload</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ParticipateScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: '#0f3362', marginBottom: 0, }}>
      <Text style={{ color: '#fff', fontSize: 18 }}>Welcome,</Text>
      <Text style={{ color: '#fff', fontSize: 18 }}>LOREM IPSUM</Text>
      <Search />

      <List navigation={navigation} name='Latest Competitions' direction='horizontal' />

      <List navigation={navigation} name='Pending Submissions' direction='vertical' />

    </View>
  );
}

function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" options={{ headerShown: false }} component={ParticipateScreen} />
      <Stack.Screen name="CardDetails" options={{ headerShown: false }} component={CardDetails} />
    </Stack.Navigator>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={{
        safeAreaInsets: { bottom: 12 },
      }}>
        <Tab.Screen name="Participate" options={{
          tabBarIcon: () => (<Text>--</Text>)
        }} component={HomeStack} />
        <Tab.Screen name="Profile" options={{
          tabBarIcon: () => (<Text>**</Text>)
        }} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}