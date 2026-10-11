export type Availability = 'Available' | 'Busy' | 'Not available';

export type Profile = {
  headline: string;
  bio: string;
  primarySkill: string;
  availability: Availability;
  imageUri: string | null;
};

export type Project = {
  id: string;
  title: string;
  problem: string;
  contribution: string;
  tech: string[];
};

export type RootStackParams = {
  Tabs: undefined;
  ProjectDetails: { projectId: string };
};