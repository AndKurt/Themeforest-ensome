const path = require('path')
const resolve = (arg) => path.resolve(__dirname, arg)

module.exports = {
  webpack: {
    alias: {
      '@App': resolve('src/App/'),
      '@assets': resolve('src/assets/'),
      '@components': resolve('src/components/'),
      '@constants': resolve('src/constants/'),
      '@hooks': resolve('src/hooks/'),
      '@interfaces': resolve('src/interfaces/'),
      '@layout': resolve('src/layout/'),
      '@mock': resolve('src/mock/'),
      '@pages': resolve('src/pages/'),
      '@store': resolve('src/store/'),
      '@styles': resolve('src/styles/'),
      '@utils': resolve('src/utils/'),
    },
  },
}
