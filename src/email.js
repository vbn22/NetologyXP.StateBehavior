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

	addAccounts(accounts){
		this._accounts.concat(accounts);
		return this._accounts.length;
	}

	connect(){
		/*connetion*/
		return true
	}

	checkInternet(){
		if (this.network_status && this._queue.length > 0){
			this.connect();
		}
	}


	messageToQueue(message){
		this._queue.push(message);
		return true;
	}
	sendMessage(message){
		let account = null;
		for (let i = 0; i < this._accounts.length; i++){
			let item = this._accounts[i];
			if (item._name == message.from){
			   account = item;
			   break;
		    }
		};
		
		if (!account){
			return false;
		}

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
