# Build the Desert Dash APK using only your phone

This project includes a GitHub Actions workflow that builds a **debug/test APK** in the cloud. No computer is needed, but a GitHub account is required to run the cloud build.

## Steps on your Android phone
1. Sign up or sign in at https://github.com.
2. Create a new repository, for example `desert-dash-game` (a private repository is fine).
3. Extract this ZIP on your phone and upload the **contents** of the `desert_dash_android` folder to the repository. Make sure `.github/workflows/build-apk.yml` is included. Some file managers hide dot-folders; if so, enable hidden files.
4. Open the repository on GitHub, choose **Actions**, then **Build Desert Dash Android APK**.
5. Tap **Run workflow** and wait for the workflow to finish successfully.
6. Open the completed workflow run, scroll to **Artifacts**, and download `desert-dash-debug-apk`. Extract it to get `app-debug.apk`.
7. Install it on your phone. Android may ask you to allow installs from that browser/file manager. Only install APKs you built or trust.

## Important
- This produces a **debug/test APK**, not a Play Store release.
- AdMob is not active just because the package includes an AdMob dependency. It still needs proper SDK integration, test ad IDs, consent/privacy handling, and testing.
- For Google Play publishing, prepare a signed release AAB, store signing credentials safely, and meet current Play Console requirements.
- Cloud build requires GitHub account access and internet. GitHub may change its interface; labels can vary slightly.
