import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

export default function SkillChip({ name, level }: { name: string; level: string }) {
  return (
    <View style={styles.chip} accessible accessibilityLabel={`${name}, ${level}`}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.level}>{level}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  name: { color: COLORS.primaryDark, fontWeight: '700', fontSize: 15 },
  level: { color: COLORS.muted, fontSize: 12 },
});
