import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

type Props = { year: string; title: string; school: string };

export default function TimelineItem({ year, title, school }: Props) {
  return (
    <View style={styles.row} accessible accessibilityLabel={`${year}. ${title} at ${school}`}>
      <View style={styles.dot} />
      <View style={styles.body}>
        <Text style={styles.year}>{year}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.school}>{school}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', marginBottom: 14 },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
    marginTop: 5,
    marginRight: 12,
  },
  body: { flex: 1 },
  year: { color: COLORS.primary, fontWeight: '700', fontSize: 13 },
  title: { color: COLORS.text, fontWeight: '700', fontSize: 16 },
  school: { color: COLORS.muted, fontSize: 14 },
});
