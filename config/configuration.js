/**
 * @file Defines the hydrater settings.
 */

// node_env can either be "development" or "production"
var nodeEnv = process.env.NODE_ENV || "development";
var defaultPort = 8000;

// Number of pdf instance to run simultaneously per cluster
var defaultConcurrency = 8;

if(nodeEnv === "production") {
  defaultPort = 80;
}

// Exports configuration
module.exports = {
  env: nodeEnv,
  port: process.env.PORT || defaultPort,
  concurrency: process.env.FILECLEANER_CONCURRENCY || defaultConcurrency,
  appName: process.env.APP_NAME || "filecleaner-hydrater",
  redisUrl: process.env.REDIS_URL
};
