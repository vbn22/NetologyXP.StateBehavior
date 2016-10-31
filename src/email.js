'use strict';


export class Email {
	constructor() {
		this._accounts = [];
		this._queue = [];
		this.network_status = true;
	};
	addAccount(account){
		this._accounts.push(account);
		return this._accounts.length;
	}
	connect(){
		/*connetion*/
		return true
	}
	messageToQueue(message){
		this._queue.push(message);
		return true;
	}
	sendMessage(message){
		if (this.network_status){
			this.connect();
		} else {
			this.messageToQueue(message)
		}

		return true;
	}
	getMessage(){
		this.connect();
		return true;
	}
};
