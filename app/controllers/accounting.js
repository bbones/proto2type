import Ember from 'ember';
import $ from 'jquery';

export default Ember.Controller.extend({
	balanceDetails: false,
	accountList: false,
	actions : {
		changeBalanceDetail: function(){
			this.toggleProperty('balanceDetails');
			debugger;
			if (this.balanceDetails) {$("#btnChngBlDt").html(' - ');}
			else {$("#btnChngBlDt").html(' + ');}

		},

		changeAccountList: function() {
			this.toggleProperty('accountList');
		}
	}
});
