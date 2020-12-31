import { Configuration as WebpackConfiguration } from 'webpack'
import { IFactoryPaths } from './types'

import { resolve } from 'path'

const cwd = process.cwd()

// http server config
export const PORT = 9000
export const HOST = '0.0.0.0'

export const WEBPACK_DEV_STATS: WebpackConfiguration['stats'] = {
  all: false,
  colors: true,
  errors: true
}

export const WEBPACK_BUILD_STATS: WebpackConfiguration['stats'] = {
  ...WEBPACK_DEV_STATS,
  timings: true,
  errors: true,
  assetsSort: '!size',
  assets: true,
  excludeAssets: [/\.*\.map/]
}

// webpack-dev-server config
export const WEBPACK_DEV_SERVER_CONFIG: Record<string, any> = {
  historyApiFallback: true,
  compress: true,
  open: false,
  overlay: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*'
  },
  // host: HOST,
  port: PORT,
  // https://github.com/webpack/webpack-dev-server/releases/tag/v4.0.0-beta.0
  // static: [paths.public],
  firewall: false,
  client: {
    host: HOST
  }
}

export const paths: IFactoryPaths = {
  cwd,
  // Source files
  src: resolve(cwd, 'src'),

  // Production build files
  dist: resolve(cwd, 'dist'),

  // Static files that get copied to build folder
  public: resolve(cwd, 'public'),

  js: 'js',
  css: 'css',
  cssExtractPublicPath: '../',
  img: 'img',
  assets: 'assets'
}
