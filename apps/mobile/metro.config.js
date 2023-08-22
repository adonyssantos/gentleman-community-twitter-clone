const path = require('path');
const { getDefaultConfig } = require('expo/metro-config');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '../..');

const monorepoPackages = {
  '@root/client': path.resolve(workspaceRoot, 'packages/client'),
  '@root/ui': path.resolve(workspaceRoot, 'packages/ui'),
  '@root/shared': path.resolve(workspaceRoot, 'packages/shared'),
};
const config = getDefaultConfig(projectRoot);
config.watchFolders = [workspaceRoot];
if (config.resolver) {
  config.resolver.extraNodeModules = monorepoPackages;
  config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(workspaceRoot, 'node_modules'),
  ];
}

// Learn more https://docs.expo.io/guides/customizing-metro
/**
 * @type {import('expo/metro-config')}
 */
module.exports = config;
