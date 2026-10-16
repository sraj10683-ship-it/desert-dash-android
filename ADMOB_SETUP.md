# AdMob integration checklist (Android)

This project is prepared for Capacitor packaging, but **ads are not enabled yet**. Do not publish with test IDs or without privacy/consent handling.

1. Create/verify the app in Google AdMob and Google Play Console.
2. Install dependencies: `npm install`
3. Add Android platform: `npx cap add android` (requires Android Studio/SDK).
4. Configure the AdMob Android App ID in the native Android manifest as required by the installed `@capacitor-community/admob` version. Use Google's official sample/test App ID during development.
5. Implement the plugin's current consent flow (UMP / consent information update, consent form where required, and privacy options) before requesting ads. Review the current plugin README and Google's User Messaging Platform guidance; APIs can vary by plugin version.
6. Initialize the AdMob plugin after consent checks. Use **test ad unit IDs only** while developing. Never click your own live ads.
7. Choose a non-intrusive placement. A rewarded ad should only grant the stated in-game reward after the ad reward callback; don't make ads appear deceptively or force clicks.
8. Publish a privacy policy describing advertising identifiers/data, disclosures in Play Console Data safety, and any required age/audience settings.
9. Replace sample IDs only after the app is reviewed and ready for production. Test on real devices.

No real-money wagering, cash-out, or real-world value for in-game coins is implemented. Revenue is not guaranteed.
