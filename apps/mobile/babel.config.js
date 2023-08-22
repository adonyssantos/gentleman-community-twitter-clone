module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@root/client': '../../packages/client/src',
            '@root/ui': '../../packages/ui/src',
            '@root/shared': '../../packages/shared/src',
          },
        },
      ],
      ['react-native-reanimated/plugin'],
    ],
  };
};
