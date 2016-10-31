'use strict';


export class Email {
	constructor() {
		this._accounts = [];
	};
	addAccount(account){
		this._accounts.push(account);
		return this._accounts.length;
	}
};
