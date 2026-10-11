import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SkillsScreen from '../screens/SkillsScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import ProjectDetailsScreen from '../screens/ProjectDetailsScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import AboutScreen from '../screens/AboutScreen';
import { RootStackParams } from '../types';
import { COLORS } from '../theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParams>();

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: '#FFFFFF',
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.muted,
        tabBarLabelStyle: { fontSize: 12, fontWeight: '700' },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Skills" component={SkillsScreen} />
      <Tab.Screen name="Projects" component={ProjectsScreen} />
      <Tab.Screen name="Edit" component={EditProfileScreen} options={{ title: 'Edit Profile' }} />
      <Tab.Screen name="About" component={AboutScreen} />
    </Tab.Navigator>
  );
}

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen
          name="ProjectDetails"
          component={ProjectDetailsScreen}
          options={{
            title: 'Project Details',
            headerStyle: { backgroundColor: COLORS.primary },
            headerTintColor: '#FFFFFF',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
