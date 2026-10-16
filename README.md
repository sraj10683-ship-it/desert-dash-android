# Desert Dash: Treasure Quest — Android project starter

Indian-fantasy themed 2D endless runner prototype with touch jump, obstacles, collectible coins, score, best score saved locally, and increasing difficulty. This is a **Capacitor Android project starter**, not a built/signed APK.

## Play the prototype
Open `www/index.html` in Chrome, or serve the `www` folder from a local web server.

## Build Android APK (developer computer required)
Prerequisites: Node.js LTS, npm, Android Studio, Android SDK, and a compatible JDK.

```bash
npm install
npx cap add android       # only the first time
npx cap sync android
npx cap open android
```

In Android Studio, allow Gradle sync, choose a device/emulator, and press Run. To make a debug APK use **Build > Build Bundle(s) / APK(s) > Build APK(s)**. For a store release, create a signed Android App Bundle (AAB), protect the signing key, and follow current Play Console testing and publishing requirements.

## Before launch
- Test on multiple screen sizes and Android versions.
- Add proper original art, sound, pause/resume polish, accessibility, and QA.
- Configure application ID, app icon, versionCode/versionName and signing.
- Follow `ADMOB_SETUP.md`; ads are not configured in this starter.
- Create a privacy policy and complete Play Console Data safety and audience declarations.
- The game coins are fictional points and have no cash value. No earnings are guaranteed.

## Build APK from a phone (cloud build)
See `MOBILE_APK_BUILD.md`. The included `.github/workflows/build-apk.yml` can build a debug APK with GitHub Actions so you do not need Android Studio on your phone. A GitHub account and uploading this project to a repository are required.
