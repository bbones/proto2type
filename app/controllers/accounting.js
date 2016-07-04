import Ember from 'ember';

export default Ember.Controller.extend({
	balanceDetails: false,
	accountList: false,
	actions:{
		changeBalanceDetail: function(){
			this.toggleProperty('balanceDetails');
		},
		
		changeAccountList: function() {
			this.toggleProperty('accountList');
		}
	}
});
