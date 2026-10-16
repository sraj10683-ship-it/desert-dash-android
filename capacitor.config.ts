import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yourstudio.desertdash',
  appName: 'Desert Dash',
  webDir: 'www',
  bundledWebRuntime: false,
  android: { allowMixedContent: false }
};
export default config;
