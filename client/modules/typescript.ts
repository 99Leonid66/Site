module.exports = function(options, next) {
  // Extend build
  this.extendBuild((config, { dev }) => {

    // Add TypeScript loader
    config.module.rules.push({
      test: /\.ts$/,
      loader: 'ts-loader',
    });

    // Add TypeScript loader for vue files
    for (const rule of config.module.rules) {
      if (rule.loader === 'vue-loader') {
        rule.options.loaders.ts = 'ts-loader?' +
          `{"appendTsSuffixTo":["\\\\.vue$"],"logInfoToStdOut":${dev}}`;
      }
    }

  });

  next();
};
