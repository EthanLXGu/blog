import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('comments');
  // this.route('post', { path: '/post/:post_id' });
  this.route('posts', function() {
    this.route('post', { path: '/:post_id' });
  });
  this.route('new-post');
  this.route('login');
  this.route('signup');
});

export default Router;
