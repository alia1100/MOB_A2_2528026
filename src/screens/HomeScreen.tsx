import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Card from '../components/Card';
import { useProfile } from '../hooks/useProfile';
import { STUDENT_INFO } from '../data/studentInfo';
import { COLORS } from '../theme';

export default function HomeScreen() {
  const { profile } = useProfile();
  const initials = STUDENT_INFO.fullName
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.name} accessibilityRole="header">
          My name is {STUDENT_INFO.fullName}.
        </Text>

        <View style={styles.center}>
          {profile.imageUri ? (
            <Image
              source={{ uri: profile.imageUri }}
              style={styles.photo}
              accessibilityLabel="Profile photo"
            />
          ) : (
            <View style={styles.avatar} accessibilityLabel="Profile avatar with initials">
              <Text style={styles.avatarText}>{initials}</Text>
            </View>
          )}
        </View>

        <Text style={styles.headline}>{profile.headline}</Text>

        <Card>
          <Text style={styles.label}>About me</Text>
          <Text style={styles.body}>{profile.bio}</Text>
        </Card>

        <Card>
          <Text style={styles.label}>Primary skill</Text>
          <Text style={styles.body}>{profile.primarySkill}</Text>
          <Text style={[styles.label, { marginTop: 10 }]}>Availability</Text>
          <Text style={styles.body}>{profile.availability}</Text>
        </Card>

        <Card>
          <Text style={styles.label}>Verification code</Text>
          <Text style={styles.code}>{STUDENT_INFO.verificationCode}</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: 16 },
  name: { fontSize: 24, fontWeight: '800', color: COLORS.primaryDark, marginBottom: 14 },
  center: { alignItems: 'center', marginBottom: 12 },
  photo: { width: 130, height: 130, borderRadius: 65, borderWidth: 3, borderColor: COLORS.primary },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: '#FFFFFF', fontSize: 44, fontWeight: '800' },
  headline: { fontSize: 18, fontWeight: '700', color: COLORS.text, textAlign: 'center', marginBottom: 14 },
  label: { fontSize: 13, fontWeight: '700', color: COLORS.primary, marginBottom: 4 },
  body: { fontSize: 16, color: COLORS.text },
  code: { fontSize: 20, fontWeight: '800', color: COLORS.primaryDark },
});
