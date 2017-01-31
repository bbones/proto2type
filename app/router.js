import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('accounting');
  this.route('about');
  this.route('contact');
  this.route('users');
  this.route('treasury');
  this.route('costcenters');
  this.route('enterprises', function() {
    this.route('enterprise', { path: '/:enterprise_id' }, function() {
      this.route('liabilities');
    });
  });
  this.route('persons');
  this.route('liabilities', function() {
    this.route('liability', { path: '/:liability_id' });
  });
  this.route('payments');
  this.route('cflines');
  this.route('payplan');
});

export default Router;
