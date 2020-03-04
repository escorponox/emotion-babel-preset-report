module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react",
    [
      "@emotion/babel-preset-css-prop",
      {
        labelFormat: "[filename]--[local]",
        sourceMap: true,
        autoLabel: true
      }
    ]
  ],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        helpers: false,
        regenerator: true
      }
    ],
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties"
  ]
};
