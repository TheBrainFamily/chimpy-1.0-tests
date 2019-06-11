const assert = require('assert');

module.exports = function () {
  this.Given(/^I run$/, function() {
    browser.url("http://google.com")
    const title = browser.getTitle()
    expect(title).toEqual('Googles')
  });
};
