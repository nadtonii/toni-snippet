
// Configuration for deployment
module.exports = {
  // Force using npm instead of bun
  packageManager: "npm",
  // Specify build command
  buildCommand: "npm install && npm run build",
  // Output directory
  outputDirectory: "dist"
};
