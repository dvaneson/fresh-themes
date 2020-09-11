(function() {
    const printf = require('printf');

    // Block helper function definitions.
    var IconHelpers = module.exports = {
  
      // Returns a span for the icon specified by the label.
      getIcon: function(label, options) {
        let themeObj = options.data.root.opts.themeObj
        let icons = themeObj.icons
        let icon = (icons && icons[label]) || "icon-link"
        return printf('<span class="%s"></span>', icon);
      }
    };
  
  }).call(this);