import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service('session'),
	currentTab: Ember.inject.service('current-tab'),

	model() {
		this.get("currentTab").set("isHome", true)
		return this.store.findAll("post")
	}

});
