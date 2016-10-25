import Ember from 'ember';

export default Ember.Controller.extend({
	currentTab: Ember.inject.service('current-tab'),
	sessionAccount: Ember.inject.service('current-user'),
	model() {
		this.get("currentTab").set("isHome", false)
	},

	actions: {
		submit() {
			const post_text = this.get("post")
			const current_user = this.store.peekRecord("user", this.get("sessionAccount").get("account").get("id"))
			console.log(" create a new post: " + post_text + " by " + current_user.get("id"))
			const new_post = this.store.createRecord('post', { information: post_text, user: current_user });
			new_post.save();
			this.set("post","");
			this.transitionToRoute('posts');
		}
	}
});
