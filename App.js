
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons'; 
import HomeScreen from './src/Pages/Home';
import OptionsScreen from './src/Pages/Options';
import SettingsScreen from './src/Pages/Settings';

const Tab = createBottomTabNavigator();

 export default function App() {
    return(
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
           style: {
            backgroundColor: 'black',
          },
        }}
      >
          <Tab.Screen 
            name="Home" 
            component={HomeScreen}
            options={{
            tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
              ),
            }}
          />
        
        <Tab.Screen
          name="Options" 
          component={OptionsScreen}
          options={{
          tabBarIcon: ({ color, size }) => (
          <Ionicons name="options" color={color} size={size} />
          ),
        }}
        />
      <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
          tabBarIcon: ({ color, size }) => (
         <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />

        </Tab.Navigator>
      </NavigationContainer>
    )
 }


