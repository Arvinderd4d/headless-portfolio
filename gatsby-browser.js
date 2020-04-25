const React = require('react')
const smoothscroll = require('smoothscroll-polyfill')
const Layout = require('./src/components/Layout').default

exports.onClientEntry = () => {
  smoothscroll.polyfill()
}

exports.wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
