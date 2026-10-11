import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

type Props = { title: string; problem: string; onPress: () => void };

export default function ProjectCard({ title, problem, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Open project ${title}`}
      style={({ pressed }) => [styles.card, pressed && { opacity: 0.8 }]}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.problem}>{problem}</Text>
      <Text style={styles.more}>View details</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  title: { fontSize: 18, fontWeight: '700', color: COLORS.primaryDark, marginBottom: 6 },
  problem: { fontSize: 14, color: COLORS.text, marginBottom: 8 },
  more: { fontSize: 14, color: COLORS.primary, fontWeight: '700' },
});
