import React, { useState } from 'react';
import { ScrollView, View, Text, Image, Pressable, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { File, Paths } from 'expo-file-system';
import FormField from '../components/FormField';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import { useProfile, DEFAULT_PROFILE } from '../hooks/useProfile';
import { validateProfile, ProfileErrors } from '../utils/validation';
import { Availability } from '../types';
import { COLORS } from '../theme';

const OPTIONS: Availability[] = ['Available', 'Busy', 'Not available'];

function Btn({ label, onPress, light }: { label: string; onPress: () => void; light?: boolean }) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={[styles.btn, light && styles.btnLight]}
    >
      <Text style={[styles.btnText, light && styles.btnTextLight]}>{label}</Text>
    </Pressable>
  );
}

export default function EditProfileScreen() {
  const { profile, update, reset } = useProfile();
  const [headline, setHeadline] = useState(profile.headline);
  const [bio, setBio] = useState(profile.bio);
  const [primarySkill, setPrimarySkill] = useState(profile.primarySkill);
  const [availability, setAvailability] = useState<Availability>(profile.availability);
  const [errors, setErrors] = useState<ProfileErrors>({});
  const [message, setMessage] = useState('');
  const [imageMessage, setImageMessage] = useState('');

  const keepFile = (uri: string): string => {
    try {
      const dest = new File(Paths.document, `profile-${Date.now()}.jpg`);
      new File(uri).copy(dest);
      return dest.uri;
    } catch {
      return uri;
    }
  };

  const pickImage = async (useCamera: boolean) => {
    setImageMessage('');
    const perm = useCamera
      ? await ImagePicker.requestCameraPermissionsAsync()
      : await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!perm.granted) {
      setImageMessage('Permission denied. Allow it in phone Settings or choose the other option.');
      return;
    }
    const res = useCamera
      ? await ImagePicker.launchCameraAsync({ allowsEditing: true, aspect: [1, 1], quality: 0.7 })
      : await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.7,
        });
    if (res.canceled) {
      setImageMessage('No image selected. Your current photo was kept.');
      return;
    }
    const saved = keepFile(res.assets[0].uri);
    await update({ ...profile, imageUri: saved });
    setImageMessage('Profile photo saved.');
  };

  const removeImage = async () => {
    await update({ ...profile, imageUri: null });
    setImageMessage('Profile photo removed.');
  };

  const onSave = async () => {
    const e = validateProfile({ headline, bio, primarySkill, availability });
    setErrors(e);
    if (Object.keys(e).length > 0) {
      setMessage('Please fix the errors above. Nothing was saved.');
      return;
    }
    await update({
      headline: headline.trim(),
      bio: bio.trim(),
      primarySkill: primarySkill.trim(),
      availability,
      imageUri: profile.imageUri,
    });
    setMessage('Profile saved.');
  };

  const onReset = async () => {
    await reset();
    setHeadline(DEFAULT_PROFILE.headline);
    setBio(DEFAULT_PROFILE.bio);
    setPrimarySkill(DEFAULT_PROFILE.primarySkill);
    setAvailability(DEFAULT_PROFILE.availability);
    setErrors({});
    setMessage('Profile reset to defaults.');
    setImageMessage('');
  };

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <SectionTitle title="Profile photo" />
      <Card>
        {profile.imageUri ? (
          <Image source={{ uri: profile.imageUri }} style={styles.photo} accessibilityLabel="Profile photo preview" />
        ) : (
          <Text style={styles.hint}>No photo selected. Take one or choose from your gallery.</Text>
        )}
        <View style={styles.row}>
          <Btn label={profile.imageUri ? 'Replace: camera' : 'Take photo'} onPress={() => pickImage(true)} />
          <Btn label={profile.imageUri ? 'Replace: gallery' : 'Choose from gallery'} onPress={() => pickImage(false)} />
          {profile.imageUri ? <Btn label="Remove photo" onPress={removeImage} light /> : null}
        </View>
        {!!imageMessage && <Text style={styles.info}>{imageMessage}</Text>}
      </Card>

      <SectionTitle title="Edit profile" />
      <FormField label="Headline" value={headline} onChangeText={setHeadline} error={errors.headline} />
      <FormField label="Short biography" value={bio} onChangeText={setBio} error={errors.bio} multiline />
      <FormField label="Primary skill" value={primarySkill} onChangeText={setPrimarySkill} error={errors.primarySkill} />

      <Text style={styles.label}>Availability</Text>
      <View style={styles.row}>
        {OPTIONS.map((o) => (
          <Pressable
            key={o}
            onPress={() => setAvailability(o)}
            accessibilityRole="button"
            accessibilityState={{ selected: availability === o }}
            accessibilityLabel={`Availability ${o}`}
            style={[styles.opt, availability === o && styles.optOn]}
          >
            <Text style={[styles.optText, availability === o && styles.optTextOn]}>{o}</Text>
          </Pressable>
        ))}
      </View>
      {!!errors.availability && <Text style={styles.error}>{errors.availability}</Text>}

      <View style={[styles.row, { marginTop: 16 }]}>
        <Btn label="Save" onPress={onSave} />
        <Btn label="Reset" onPress={onReset} light />
      </View>
      {!!message && <Text style={styles.info}>{message}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: 16, paddingBottom: 40 },
  photo: { width: 140, height: 140, borderRadius: 70, alignSelf: 'center', marginBottom: 12 },
  hint: { color: COLORS.muted, marginBottom: 12, fontSize: 15 },
  row: { flexDirection: 'row', flexWrap: 'wrap' },
  btn: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  btnLight: { backgroundColor: COLORS.primaryLight, borderWidth: 1, borderColor: COLORS.primary },
  btnText: { color: '#FFFFFF', fontWeight: '700', fontSize: 15 },
  btnTextLight: { color: COLORS.primaryDark },
  info: { color: COLORS.primaryDark, marginTop: 6, fontSize: 14 },
  label: { fontWeight: '700', color: COLORS.text, marginBottom: 6, fontSize: 15 },
  opt: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 8,
    marginBottom: 8,
    backgroundColor: COLORS.card,
  },
  optOn: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  optText: { color: COLORS.text, fontSize: 15 },
  optTextOn: { color: '#FFFFFF', fontWeight: '700' },
  error: { color: COLORS.error, fontSize: 13 },
});
