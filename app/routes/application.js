import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
export default Ember.Route.extend(ApplicationRouteMixin, {
	sessionAccount: Ember.inject.service('current-user'),
  currentTab: Ember.inject.service('current-tab'),

  beforeModel() {
  	return this._loadCurrentUser();
  },

  sessionAuthenticated() {
  	this._loadCurrentUser().then(()=>{
    		this.transitionTo("/posts");
  	}).catch(() => this.get("session").invalidate());
	},

  _loadCurrentUser() {
    return this.get("sessionAccount").loadCurrentUser();
  },

	actions: {  
    logout(){
      this.transitionTo("posts");
      this.get("session").invalidate();
      console.log("log out")
    }
  }
});
