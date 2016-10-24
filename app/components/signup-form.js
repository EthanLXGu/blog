import Ember from 'ember';
const { service } = Ember.inject;
export default Ember.Component.extend({  
  session: service('session'),
  actions: {
    submit(){
      let user = this.get('user')
      console.log("sign up: " + this.get("user.email") + " password: " + this.get("user.password"))
      this.attrs.triggerSave(user);
    }
 }
});