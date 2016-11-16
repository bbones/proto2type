import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('accounting');
  this.route('about');
  this.route('contact');
  this.route('users');
  this.route('treasury');
  this.route('costcenters');
  this.route('enterprises');
  this.route('persons');
  this.route('liabilities');
  this.route('payments');
  this.route('cflines');
});

export default Router;
