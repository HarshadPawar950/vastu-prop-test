# Vastu Prop · test app

Test build of the Vastu Prop app for checking features on real phones.

- Live: https://harshadpawar950.github.io/vastu-prop-test/
- Features: floor plan check, room camera check, Vastu compass (with GPS sun check), home numerology
- Wrapped as an Android APK with PWABuilder (package com.vastupropsai.test)

Updating: replace the files here. Installed phones pick up the new version the next time the app opens.
Vastu is traditional design guidance; it can't guarantee wealth, health or success.

## Build 1.1 (28 Oct 2026)
- Locked light design: mandala hero, cream background, gold dial glow
- Fonts bundled in `fonts/`, so the app looks right offline
- Phones without a compass: direction is set once with the sun (GPS + time), then the motion sensor tracks turns
- New screens: Welcome (first run), My Checks (saved on the phone, max 15), About & privacy
