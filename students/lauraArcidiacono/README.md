# Laura Arcidiacono

### Actualmente participo del equipo DINS+RevAmp de Softonic

#### GitHub: [Laura-Arcidiacono](https://github.com/Laura-Arcidiacono)

#### Project config:

> npm init --yes

#### Typescript and Jest config:

> npm install --save-dev jest typescript ts-jest @types/jest

> npm install jest-environment

> npx ts-jest config:init

> npx tsc --init

##### Basic tsconfig.json

```js
{
  "compilerOptions": {
  "target": "es2016",
  "module": "commonjs",
  "moduleResolution": "node",
  "esModuleInterop": true,
  "forceConsistentCasingInFileNames": true,
  "strict": true,
  "skipLibCheck": true
  }
}
```

#### Webpack config:

> npm install webpack

> npm installe webpack-dev-server

> npm install webpack-cli

> npm install ts-loader

> npm install css-loader

> npm install style-loader

> npm install html-webpack-plugin

##### webpack.config.js

```jss
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/index.html",
    }),
  ],
};
```

#### RxJs config:

> npm install rxjs

> npm install @reactivex/rxjs

> npm install jsdom


#### Express & socket.io config:

> npm install express

> npm install @types/express

> npm install socket.io

> npm install socket.io-client