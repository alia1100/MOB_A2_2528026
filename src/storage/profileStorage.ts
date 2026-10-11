import AsyncStorage from '@react-native-async-storage/async-storage';
import { Profile } from '../types';

const KEY = 'profile_v1';

export async function loadProfile(): Promise<Profile | null> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Profile) : null;
  } catch {
    return null;
  }
}

export async function saveProfile(profile: Profile): Promise<void> {
  await AsyncStorage.setItem(KEY, JSON.stringify(profile));
}

export async function resetProfile(): Promise<void> {
  await AsyncStorage.removeItem(KEY);
}
