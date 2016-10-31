'use strict';


export class Email {
	constructor() {
		this._accounts = [];
	};
	addAccount(account){
		this._accounts.push(account);
		return this._accounts.length;
	}
	connect(){
		/*connetion*/
		return true
	}
	sendMessage(from,to,text){
		this.connect();
		return true;
	}
	getMessage(){
		this.connect();
		return true;
	}
};
