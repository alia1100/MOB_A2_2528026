export const STUDENT_INFO = {
  fullName: "UMUTONIWASE Alice",
  registrationNumber: "25/28026",
  verificationCode: "MOB-A2-8026",
  appName: "AUPortfolio",
  version: "1.0.0",

  headline: "Software Engineering Student",

  biography:
    "I am a Software Engineering student at INES Ruhengeri. I am very passionate about creating mobile apps and websites, and I am looking for my first internship.",

  primarySkill: "React Native",

  availability: "Available",

  skills: [
    { name: "HTML & CSS", level: "Beginner" },
    { name: "JavaScript", level: "Beginner" },
    { name: "React Native", level: "Beginner" },
    { name: "Java", level: "Beginner" },
    { name: "MySQL Database", level: "Beginner" },
  ],

  education: [
    {
      year: "2024 - Present",
      title: "Bachelor's in Software Engineering",
      school: "INES Ruhengeri",
    },
    {
      year: "Previous studies",
      title: "High School Diploma",
      school: "Ecole Secondaire Saint Vincent Muhoza",
    },
  ],

  projects: [
    {
      id: "1",
      title: "AUPortfolio Mobile App",
      problem:
        "Recruiters usually read a paper CV. This app introduces me through a mobile portfolio that works offline.",
      contribution:
        "I designed and built the screens, navigation, profile editor with validation, profile photo selection and local saving.",
      technology: "React Native, Expo, TypeScript, AsyncStorage",
    },
    {
      id: "2",
      title: "marcArt - Artist Portfolio Website",
      problem:
        "An artist needed an online portfolio to showcase his artworks so visitors could view them easily.",
      contribution:
        "I built the website pages, designed the layout and look, created the artwork gallery and added JavaScript features.",
      technology: "HTML, CSS, JavaScript",
    },
  ],
};
