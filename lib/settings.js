var settings = {
  mochaOpts: undefined, // --mocha_opts opts_file
  mochaTestFolders: undefined, // --mocha_tests location (or array in magellan.json)
  host: undefined,  // --host e.g. test.mydomain.com
  
  initialize: function (argv) {
    settings.mochaOpts = argv.mocha_opts;
    settings.mochaTestFolders = argv.mocha_tests;
    settings.host = argv.host;
  }
};

module.exports = settings;