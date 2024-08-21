const { createApp, generateStaticPages } = require('@destools/fest.js');
const path = require('path');
const fs = require('fs');

// Load configuration
const configPath = path.resolve(process.cwd(), 'fest.config.js');
const config = fs.existsSync(configPath) ? require(configPath) : {};

// Initialize the app and server
const { app } = createApp(config);

async function generateStatic() {
  if (typeof generateStaticPages === 'function') {
    try {
      await generateStaticPages(config);
      console.log('Static site generation completed');
    } catch (error) {
      console.error('Error during static site generation:', error);
    }
  }
}

// Export a function to handle HTTP requests
module.exports = async (req, res) => {
  await generateStatic(); // Ensure static pages are generated
  await app(req, res);   // Handle the request with the app
};
