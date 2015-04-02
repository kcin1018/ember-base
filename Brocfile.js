/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/moment/moment.js');
app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js');

var mergeTrees = require('broccoli-merge-trees');
var pickFiles = require('broccoli-static-compiler');

var bootstrapFonts = pickFiles('bower_components/bootstrap/dist/fonts', {
    srcDir: '/',
    files: ['**/*'],
    destDir: '/fonts'
});

module.exports = mergeTrees([app.toTree(), bootstrapFonts]);
