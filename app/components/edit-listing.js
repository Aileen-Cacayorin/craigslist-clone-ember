import Ember from 'ember';

export default Ember.Component.extend({
  editListing: false,

  actions: {
    showEditForm() {

      this.set('editListing', true);
    },

    saveEdit(listing) {
      var params = {
        title: this.get('title'),
        name: this.get('name'),
        email: this.get('email'),
        location: this.get('location'),
        details: this.get('details'),
        image: this.get('image')
      }
      this.set('editListing', false);
      this.sendAction('saveEdit', listing, params);
    }
  }
});
