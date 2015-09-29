import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('listing', params.listing_id);
  },

  actions: {
    deleteListing(model) {
      model.destroyRecord();
      this.transitionTo('index');
    },

    saveEdit(listing, params) {
      Object.keys(params).forEach(function(key){
        if(params[key] !== undefined) {
          listing.set(key, params[key]);
        }

      });
      listing.save();
      this.transitionTo('listing');
    }
  }
});
