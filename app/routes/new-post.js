import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service('session'),
	currentTab: Ember.inject.service('current-tab'),
	sessionAccount: Ember.inject.service('current-user'),
	model() {
		this.get("currentTab").set("isHome", false)
	},

	beforeModel() {
      if (this.get("session.isAuthenticated")) {
      } else {
        alert("Hello. If you want send a new post, please log in first.");
        this.transitionTo('posts');
      }	
    }

});
