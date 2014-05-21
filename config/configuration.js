/**
 * @file Defines the hydrater settings.
 */

// node_env can either be "development" or "production"
var node_env = process.env.NODE_ENV || "development";
var default_port = 8000;

// Number of pdf instance to run simultaneously per cluster
var default_concurrency = 4;

var default_api_url="https://api.anyfetch.com";
if(node_env === "production") {
  default_port = 80;
}

// Exports configuration
module.exports = {
  env: node_env,
  port: process.env.PORT || default_port,
  api_url: process.env.API_URL || default_api_url,
  concurrency: process.env.HYDRATER_FILECLEANER_CONCURRENCY || default_concurrency
};
