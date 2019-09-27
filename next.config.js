require('dotenv').config();

const path = require('path');
const Dotenv = require('dotenv-webpack');

const nextConfig = {
  webpack: (config, { isServer }) => {
    return {
      ...config,
      // Fixes npm packages that depend on `fs` and `net`  module
      ...(isServer && {
        node: {
          fs: 'empty',
          net: 'empty',
        },
      }),
      // add environment config
      ...{
        plugins: [
          ...(config.plugins || []),

          // Read the .env file
          new Dotenv({
            path: path.join(__dirname, '.env'),
            systemvars: true,
          }),
        ],
      },
    };
  },
};

module.exports = nextConfig;
