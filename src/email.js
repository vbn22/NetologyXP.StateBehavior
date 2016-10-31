'use strict';


export class Email {
	    constructor() {
	        this._accounts = [];
	    };
	addAccount(account){
		this._accounts += account;
		return true;
	}
};
