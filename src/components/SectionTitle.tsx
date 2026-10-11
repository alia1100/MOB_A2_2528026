import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

export default function SectionTitle({ title }: { title: string }) {
  return (
    <Text accessibilityRole="header" style={styles.title}>
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.primaryDark,
    marginTop: 8,
    marginBottom: 10,
  },
});
