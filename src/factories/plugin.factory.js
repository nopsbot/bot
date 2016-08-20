var PluginFactory = function() {
    var plugins = [];

    function addPlugin(plugin) {
        if (validate(plugin)) {
            plugins.push(plugin);
            return this;
        }
        else {
            throw new Error('not a valid plugin');
        }
    }
    
    function getPlugin(provider) {
        var plugin;

        plugins.forEach(p => {
            if (p.provider.toLowerCase() === provider.toLowerCase())
                plugin = p;
        });

        return plugin;
    }

    function validate(plugin) {
        //TODO: validate the param is a plugin
        return (plugin == true);
    }

    return {
        addPlugin: addPlugin,
        getPlugin: getPlugin
    }
}();

module.exports = PluginFactory;