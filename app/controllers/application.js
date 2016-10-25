import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  sessionAccount: Ember.inject.service('current-user'),
  currentTab: Ember.inject.service('current-tab'),

  actions: {
    invalidateSession(){
      this.get('session').invalidate();
      console.log("log out")
    },

    islogin() {
      if (this.get("session.isAuthenticated")) {
        this.transitionToRoute('new-post');
      } else {
        alert("Hello. If you want send a new post, please log in first.");
      }
    },
  }
});