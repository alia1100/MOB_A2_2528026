import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../theme';

type Props = {
  label: string;
  value: string;
  onChangeText: (t: string) => void;
  error?: string;
  multiline?: boolean;
  placeholder?: string;
};

export default function FormField({ label, value, onChangeText, error, multiline, placeholder }: Props) {
  return (
    <View style={styles.wrap}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        multiline={multiline}
        placeholder={placeholder}
        accessibilityLabel={label}
        style={[styles.input, multiline && styles.multi, !!error && styles.inputError]}
      />
      {!!error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { marginBottom: 14 },
  label: { fontWeight: '700', color: COLORS.text, marginBottom: 6, fontSize: 15 },
  input: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: COLORS.text,
  },
  multi: { minHeight: 90, textAlignVertical: 'top' },
  inputError: { borderColor: COLORS.error },
  error: { color: COLORS.error, marginTop: 4, fontSize: 13 },
});
