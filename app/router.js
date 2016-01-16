import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('menu');
  this.route('item', {path: 'item/:item_name'});
});

export default Router;
