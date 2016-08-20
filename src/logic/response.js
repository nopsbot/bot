var Response = function() {
    var resources = require('../language/resources');
    
    var actionMap = {
        '/': onDefault
    }

    var Result = function(status, text) {
        var self = this;
        self.status = status;
        self.text = text;
    }

    function on(action, callback) {
        actionMap[action](callback);
    }

    function onDefault(callback) {
        callback(new Result('ok', resources.Hi));
    }

    return {
        on: on
    }
}();

module.exports = Response;