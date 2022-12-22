module.exports = {
  plugins: {
    // Plugins for PostCSS
    'postcss-import': {},
    'postcss-custom-properties': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
        grid: 'autoplace'
      }
    },
    'postcss-flexbugs-fixes': {},
    'postcss-gap-properties': {},
    'postcss-nested': {}
  }
}
