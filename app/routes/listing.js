import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('listing', params.listing_id);
  },

  actions: {
    deleteListing(model) {
      model.destroyRecord();
      this.transitionTo('subcategory', model.subcategory.id)
    }
  }
});
