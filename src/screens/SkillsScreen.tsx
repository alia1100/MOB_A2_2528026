import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import SectionTitle from '../components/SectionTitle';
import SkillChip from '../components/SkillChip';
import TimelineItem from '../components/TimelineItem';
import Card from '../components/Card';
import EmptyState from '../components/EmptyState';
import { STUDENT_INFO } from '../data/studentInfo';
import { COLORS } from '../theme';

export default function SkillsScreen() {
  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <SectionTitle title="Skills" />
      {STUDENT_INFO.skills.length === 0 ? (
        <EmptyState message="No skills added yet." />
      ) : (
        <View style={styles.wrap}>
          {STUDENT_INFO.skills.map((s) => (
            <SkillChip key={s.name} name={s.name} level={s.level} />
          ))}
        </View>
      )}

      <SectionTitle title="Education" />
      <Card>
        {STUDENT_INFO.education.map((e) => (
          <TimelineItem key={e.title} year={e.year} title={e.title} school={e.school} />
        ))}
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: COLORS.background },
  content: { padding: 16 },
  wrap: { flexDirection: 'row', flexWrap: 'wrap' },
});
