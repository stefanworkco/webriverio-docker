let capabilities;

capabilities = [
  {
    maxInstances: 1,
    browserName: "chrome",
  },
  {
    maxInstances: 1,
    browserName: "firefox",
  },
];

exports.config = {
  breakpoint: process.env.breakpoint,
  runner: "local",
  hostname: "localhost",
  port: 4444,
  path: "/wd/hub",
  specs: ["./webdriverio/specs/**/*.js"],
  suites: {
    homepage: [
      "./webdriverio/specs/homepageBasic.js",
      "./webdriverio/specs/homepage.js",
    ],
    a11y: ["./webdriverio/specs/a11y/*.js"],
  },
  exclude: ["./webdriverio/page-objects/*.js"],
  capabilities,
  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "silent",
  coloredLogs: true,
  bail: 0,
  baseUrl: "https://work.co",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["docker"],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
