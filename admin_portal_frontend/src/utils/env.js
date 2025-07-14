//
// Utility to safely fetch environment variables.
//
export function getEnv(key, def = "") {
  return process.env[key] || def;
}
