/**
 * Application Configuration
 */
export default {
  name: process.env.APP_NAME || 'Orchestr',
  env: process.env.APP_ENV || 'local',
  debug: process.env.APP_DEBUG === 'true',
  port: Number(process.env.APP_PORT) || 3000,
};
