(function() {
    const printf = require('printf');

    // Block helper function definitions.
    var IconHelpers = module.exports = {

      getIconPartial: function(label) {
        return printf("icon-%s", label)
      }
    };
  
  }).call(this);