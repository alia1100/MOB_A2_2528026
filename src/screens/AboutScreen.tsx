import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Card from '../components/Card';
import SectionTitle from '../components/SectionTitle';
import { STUDENT_INFO } from '../data/studentInfo';
import { COLORS } from '../theme';

const rows: [string, string][] = [
  ['App name', STUDENT_INFO.appName],
  ['Student name', STUDENT_INFO.fullName],
  ['Registration number', STUDENT_INFO.registrationNumber],
  ['Verification code', STUDENT_INFO.verificationCode],
  ['Version', STUDENT_INFO.version],
];

export default function AboutScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Card>
        {rows.map(([k, v]) => (
          <Text key={k} style={styles.row}>
            <Text style={styles.key}>{k}: </Text>
            {v}
          </Text>
        ))}
      </Card>

      <SectionTitle title="Data use" />
      <Card>
        <Text style={styles.body}>
          This app stores only low-risk profile data (headline, bio, primary skill, availability
          and a profile photo reference) on this device. It stores no passwords, tokens or
          sensitive records, and nothing is sent to a server.
        </Text>
      </Card>

      <SectionTitle title="Offline use" />
      <Card>
        <Text style={styles.body}>
          The whole portfolio works offline, including in Airplane Mode. No feature in this app
          needs an internet connection.
        </Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: 16 },
  row: { fontSize: 16, color: COLORS.text, marginBottom: 8 },
  key: { fontWeight: '700', color: COLORS.primaryDark },
  body: { fontSize: 16, color: COLORS.text },
});
