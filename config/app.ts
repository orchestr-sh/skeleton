/**
 * Application Configuration
 */
export default {
  name: process.env.APP_NAME || 'Orchestr',
  env: process.env.APP_ENV || 'local',
  debug: process.env.APP_DEBUG === 'true',
  port: Number(process.env.APP_PORT) || 3000,

  // Localization - read by the TranslationServiceProvider (orchestr lang:publish)
  locale: process.env.APP_LOCALE || 'en',
  fallback_locale: 'en',
};
