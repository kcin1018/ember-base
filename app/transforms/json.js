import DS from 'ember-data';

const {Transform} = DS;

export default Transform.extend({
    deserialize: function(serialized) {
        return JSON.parse(serialized);
    },

    serialize: function(deserialized) {
        return JSON.stringify(deserialized);
    }
});
