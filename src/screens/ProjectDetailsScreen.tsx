import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Card from '../components/Card';
import EmptyState from '../components/EmptyState';
import { STUDENT_INFO } from '../data/studentInfo';
import { COLORS } from '../theme';

export default function ProjectDetailsScreen() {
  const route = useRoute<any>();
  const project = STUDENT_INFO.projects.find((p) => p.id === route.params?.projectId);

  if (!project) {
    return <EmptyState message="Project not found." />;
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <Text style={styles.title} accessibilityRole="header">{project.title}</Text>
      <Card>
        <Text style={styles.label}>Problem</Text>
        <Text style={styles.body}>{project.problem}</Text>
      </Card>
      <Card>
        <Text style={styles.label}>My contribution</Text>
        <Text style={styles.body}>{project.contribution}</Text>
      </Card>
      <Card>
        <Text style={styles.label}>Technology used</Text>
        <Text style={styles.body}>{project.technology}</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: 16 },
  title: { fontSize: 22, fontWeight: '800', color: COLORS.primaryDark, marginBottom: 12 },
  label: { fontSize: 13, fontWeight: '700', color: COLORS.primary, marginBottom: 4 },
  body: { fontSize: 16, color: COLORS.text },
});
