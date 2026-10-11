My name is UMUTONIWASE Alice.

# AUPortfolio

- **Student:** UMUTONIWASE Alice
- **Registration number:** 25/28026
- **App name:** AUPortfolio
- **Verification code:** MOB-A2-8026
- **Version:** 1.0.0
- **Course:** Mobile Application Development (SWE 3409), INES Ruhengeri
- **Assignment:** Individual Assignment 2, "My Name Is" Personal Portfolio App

## Purpose

AUPortfolio is a personal portfolio app that introduces me to a recruiter. It installs as a standalone Android APK, opens without Expo Go and works offline, so a recruiter can understand my profile in about two minutes.

## Features

1. Home: starts with "My name is UMUTONIWASE Alice.", then profile image or initials avatar, headline, short biography and verification code.
2. Skills and education: five skills and an education timeline built from reusable components.
3. Projects: two real projects (AUPortfolio and marcArt), each with title, problem, my contribution and technology, opened on a separate Project Details screen.
4. Profile editor: controlled fields for headline, biography, primary skill and availability, with four validation rules, field-level error messages and blocked invalid saves.
5. Navigation: bottom tabs for the main sections and a stack route for Project Details. Android Back returns to the Projects tab.
6. Profile media: take a photo or choose one from the gallery, with preview, replace and remove actions, and messages for denied permission or cancellation.
7. Local persistence: profile data and the profile image reference are saved with AsyncStorage and restored after the app is closed and reopened.
8. Offline behavior: the whole app works in Airplane Mode. No feature needs internet.
9. About screen: app name, student name, registration number, verification code, version and a data-use statement.
10. Standalone release: built as an APK with EAS Build (preview profile).

## Technology

React Native, Expo, TypeScript, React Navigation (bottom tabs and native stack), Expo ImagePicker, Expo FileSystem, AsyncStorage.

## Setup and run

Run `npm install`, then `npx expo start`. Expo Go is used only for development previews. The submitted product is the APK.

## EAS build command

Run `npm install -g eas-cli`, then `eas login`, then `eas build -p android --profile preview`.

The Android package is `rw.ac.ines.ug2528026.auportfolio`.

## Tested device

- Device: itel A200
- Android version: 15
- Tested on the installed APK, without Expo Go.

## Submission links

- GitHub repository: https://github.com/alia1100/MOB_A2_2528026
- Release (v1.0.0): https://github.com/alia1100/MOB_A2_2528026/releases/tag/v1.0.0
- APK: https://github.com/alia1100/MOB_A2_2528026/releases/download/v1.0.0/MOB_A2_2528026.apk
- Final commit hash: REPLACE_WITH_HASH

## Repository documents

- docs/MOB_A2_2528026_UIUX.pdf
- evidence/MOB_A2_2528026_TEST_LOG.pdf
- evidence/MOB_A2_2528026_DECLARATION.pdf
- evidence/AI_USE.md

## Data use

The app stores only low-risk profile data (headline, biography, primary skill, availability and a profile photo reference) on the device. It stores no passwords, tokens or sensitive records, and sends nothing to a server.

## Known limitations

- Android only. No iOS or web version is provided.
- Skills, education and projects are fixed in the source code. Only the headline, biography, primary skill, availability and photo can be edited in the app.
- The app has no online features.
