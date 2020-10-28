(function () {
    var DocHelpers = (module.exports = {
        getDocPartial: function (name, options) {
            return name + '-doc';
        },
        getPdfPartial: function (name, options) {
            return name + '-pdf';
        },
    });
}.call(this));
