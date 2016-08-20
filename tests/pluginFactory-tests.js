var chai = require('chai');
var expect = chai.expect;
var pluginFactory = require('../src/factories/plugin.factory');

describe("Plugin Factory", function() {
    beforeEach(function() {
        pluginFactory.clear();
    });

    it('should return 2 mock factories after adding them on calling addPlugin and getPlugin', function() {
        var mockPlugin1 = {
            provider: 'azure'
        }

        var mockPlugin2 = {
            provider: 'digitalocean'
        }

        pluginFactory.addPlugin(mockPlugin1);
        pluginFactory.addPlugin(mockPlugin2);

        var plugin1 = pluginFactory.getPlugin('azure');
        var plugin2 = pluginFactory.getPlugin('digitalocean');

        expect(plugin1.name).to.equal(mockPlugin1.name);
        expect(plugin2.name).to.equal(mockPlugin2.name);
    });
    
    it('should return 0 plugins when asking for a plugin that doesnt exist', function() {
        var mockPlugin1 = {
            provider: 'azure'
        }
        
        pluginFactory.addPlugin(mockPlugin1);

        var plugin1 = pluginFactory.getPlugin('digitalocean');
        expect(plugin1).to.be.undefined;
    });
});
