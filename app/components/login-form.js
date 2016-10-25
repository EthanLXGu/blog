import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  session: service('session'),
  
  actions: {
    authenticate() {
      let { email, password } = this.getProperties('email', 'password');  
      console.log("email: " + email + "password: " + password);
      this.get('session').authenticate('authenticator:devise', email, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
     });
   }
  }
});
