var url;

const DELAY = 3000;

module.exports = {
  before: function(browser) {
    url = browser.launch_url;
  },
  'Example run' : function (browser) {
    browser
      .url(url)
      .end();
  }
};
