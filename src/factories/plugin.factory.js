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
	
	function clear() {
		plugins = [];
	}
	
    function validate(plugin) {
        //TODO: validate the param is a plugin
        return (Object.keys(plugin).length > 0 && plugin.constructor === Object);
    }

    return {
        addPlugin: addPlugin,
        getPlugin: getPlugin,
		clear: clear
    }
}();

module.exports = PluginFactory;