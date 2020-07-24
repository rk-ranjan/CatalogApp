const PROXY_CONFIG = [
    {
        context: [
            "/*"
        ],
        target: "https://frontend-hiring.appspot.com",
        secure: false,
        "logLevel": "debug",
        "changeOrigin": true
    }
  ]
module.exports = PROXY_CONFIG;
