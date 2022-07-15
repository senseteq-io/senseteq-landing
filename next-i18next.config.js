const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'no',
    locales: ['en', 'no'],
    localeDetection: false,
    localePath: path.resolve('./public/locales')
  }
}
