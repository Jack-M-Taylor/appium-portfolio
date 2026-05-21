const path = require("path");

exports.config = {
  runner: "local",

  port: 4723,

  specs: ["./test/specs/**/*.spec.js"],

  maxInstances: 1,

  capabilities: [
    {
      platformName: "Android",
      "appium:automationName": "UiAutomator2",
      "appium:deviceName": "Android Emulator",
      "appium:app": path.join(process.cwd(), "apps", "sauce-demo.apk"),
      "appium:newCommandTimeout": 240,
      "appium:autoGrantPermissions": true,
    },
  ],

  logLevel: "info",

  bail: 0,

  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  framework: "mocha",

  reporters: ["spec"],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
