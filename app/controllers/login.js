import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
	    login() {

	      let {email, password} = this.getProperties('email', 'password');
	      console.log('email: ' + email + " password: " + password);
	      console.log(this.store.query('user', { email: email , password: password}));
	      if (email == "123@qq.com" && password == "123") {
	      	this.transitionToRoute('posts');
	      } else {
	      	console.log("Username and password did not match")
	      	// this.transitionTo('/');
	      }
	    }
  	}
});
