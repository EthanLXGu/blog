import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  // currentUser: null, 
  // updateCurrentUser: function () { 
  //   if (this.get("session.isAuthenticated")){
  //     this.get('store').findRecord('user', 'me').then((user) => {
  //       this.set("currentUser", user);
  //     })
  //   }
  // }.on('init'),
  actions: {
    invalidateSession(){
      this.get('session').invalidate();
      this.transitionToRoute('/login');
      console.log("log out")
    }
  }
});