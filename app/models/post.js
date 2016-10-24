import DS from 'ember-data';

export default DS.Model.extend({
  information: DS.attr('string'),
  comments: DS.hasMany('comment'),
  // user: DS.belongsTo('user')
});
