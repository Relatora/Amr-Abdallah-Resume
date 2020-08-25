module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Hi! I'm Amr Abdallah!","short_name":"Hi! I'm Amr Abdallah!","start_url":"/Amr-Resume","background_color":"#ffffff","theme_color":"#25303B","display":"minimal-ui","icon":"src/assets/resume.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"0968b47b5c3493a9882790c760ffd9b6"},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-170106177-1"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
