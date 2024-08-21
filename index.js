// Import createApp and generateStaticPages (if you're using SSG)
const { createApp, generateStaticPages } = require('@destools/fest.js');

const path = require('path');
const fs = require('fs');

const isDevelopment = process.env.NODE_ENV === 'development';

// Load configuration
const configPath = path.resolve(process.cwd(), 'fest.config.js');
const config = fs.existsSync(configPath) ? require(configPath) : {};

// Initialize the app and server
const { app, server } = createApp(config);

const PORT = process.env.PORT || 3000;

async function startServer() {
  if (!isDevelopment && typeof generateStaticPages === 'function') {
    // Run SSG process in production mode
    try {
      await generateStaticPages(config);
      console.log('Static site generation completed');
    } catch (error) {
      console.error('Error during static site generation:', error);
    }
  }

  server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

startServer();
