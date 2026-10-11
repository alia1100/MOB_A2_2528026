import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ProjectCard from '../components/ProjectCard';
import EmptyState from '../components/EmptyState';
import { STUDENT_INFO } from '../data/studentInfo';
import { COLORS } from '../theme';

export default function ProjectsScreen() {
  const navigation = useNavigation<any>();
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      {STUDENT_INFO.projects.length === 0 ? (
        <EmptyState message="No projects added yet." />
      ) : (
        STUDENT_INFO.projects.map((p) => (
          <ProjectCard
            key={p.id}
            title={p.title}
            problem={p.problem}
            onPress={() => navigation.navigate('ProjectDetails', { projectId: p.id })}
          />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: 16 },
});
