export type ProfileErrors = {
  headline?: string;
  bio?: string;
  primarySkill?: string;
  availability?: string;
};

export function validateProfile(p: {
  headline: string;
  bio: string;
  primarySkill: string;
  availability: string;
}): ProfileErrors {
  const e: ProfileErrors = {};

  if (p.headline.trim().length < 5 || p.headline.trim().length > 60) {
    e.headline = 'Headline must be 5 to 60 characters.';
  }
  if (p.bio.trim().length < 20 || p.bio.trim().length > 200) {
    e.bio = 'Bio must be 20 to 200 characters.';
  }
  if (!p.primarySkill.trim()) {
    e.primarySkill = 'Primary skill is required.';
  } else if (!/^[A-Za-z0-9 +#.\-]+$/.test(p.primarySkill.trim())) {
    e.primarySkill = 'Use only letters, numbers and + # . - characters.';
  }
  if (!p.availability) {
    e.availability = 'Choose an availability status.';
  }

  return e;
}
