'use strict'
const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap

var px2remConfig = {
  baseDpr: 2,
  remUnit: 100,
  remPrecision: 6,
  forcePxComment: 'px',
  keepComment: 'no',
  shouldUseDprRule: function(rule){
    var list = ['font', 'font-size'];
    return list.some(function(item) {
      return item === rule.property;
    })
  },
  shouldIgnoreRule: function(rule) {
    // return  /border/.test(rule.property);
  }
}

module.exports = {
  loaders: utils.cssLoaders({
    sourceMap: sourceMapEnabled,
    extract: isProduction
  }),
  postcss: [
    require('postcss-px2rem-dpr')(px2remConfig)
  ],
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
