import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		submit() {
			const comment_text = this.get("comment")
			console.log(" create a new comment: " + comment_text)
			// console.log(" create a new model: " + this.get("model"))
			const post = this.get("model")
			this.set("comment", "")
			const new_comment = this.store.createRecord('comment', { info: comment_text, post: post });
			new_comment.save();
			// this.transitionToRoute('posts');
		}
	}
});
