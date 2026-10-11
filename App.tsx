import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import RootNavigator from './src/navigation/RootNavigator';
import { ProfileProvider, useProfile } from './src/hooks/useProfile';
import { COLORS } from './src/theme';

function Gate() {
  const { loading } = useProfile();
  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.background }}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }
  return <RootNavigator />;
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ProfileProvider>
        <StatusBar style="dark" />
        <Gate />
      </ProfileProvider>
    </SafeAreaProvider>
  );
}
