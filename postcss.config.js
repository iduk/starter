module.exports = {
  plugins: [
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
          grid: true,
        },
        stage: 3,
        features: {
          'nesting-rules': true,
          'custom-properties': true,
          'custom-media-queries': true,
        },
      },
    ],
  ],
}
