import Ember from 'ember';

export default Ember.Controller.extend({
	currentTab: Ember.inject.service('current-tab'),
	model() {
		this.get("currentTab").set("isHome", false)
	},
	actions: {
		submit() {
			const post_text = this.get("post")
			console.log(" create a new post: " + post_text)
			const new_post = this.store.createRecord('post', { information: post_text });
			new_post.save();
			this.set("post","");
			this.transitionToRoute('posts');
		}
	}
});
