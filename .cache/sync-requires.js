const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("D:\\Dev\\Gatsby_Resume\\Amr-Resume\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("D:\\Dev\\Gatsby_Resume\\Amr-Resume\\src\\pages\\index.js"))),
  "component---src-pages-portfolio-js": hot(preferDefault(require("D:\\Dev\\Gatsby_Resume\\Amr-Resume\\src\\pages\\portfolio.js")))
}

