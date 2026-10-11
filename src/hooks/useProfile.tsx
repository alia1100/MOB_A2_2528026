import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Profile, Availability } from '../types';
import { loadProfile, saveProfile, resetProfile } from '../storage/profileStorage';
import { STUDENT_INFO } from '../data/studentInfo';

export const DEFAULT_PROFILE: Profile = {
  headline: STUDENT_INFO.headline,
  bio: STUDENT_INFO.biography,
  primarySkill: STUDENT_INFO.primarySkill,
  availability: STUDENT_INFO.availability as Availability,
  imageUri: null,
};

type ProfileContextType = {
  profile: Profile;
  loading: boolean;
  update: (p: Profile) => Promise<void>;
  reset: () => Promise<void>;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<Profile>(DEFAULT_PROFILE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile().then((saved) => {
      if (saved) setProfile(saved);
      setLoading(false);
    });
  }, []);

  const update = async (p: Profile) => {
    await saveProfile(p);
    setProfile(p);
  };

  const reset = async () => {
    await resetProfile();
    setProfile(DEFAULT_PROFILE);
  };

  return (
    <ProfileContext.Provider value={{ profile, loading, update, reset }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error('useProfile must be used inside ProfileProvider');
  return ctx;
}
