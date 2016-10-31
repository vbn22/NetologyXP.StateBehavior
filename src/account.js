'use strict';


export class EmailAccount {
	constructor(name) {
		this._name = name;
	};

	get name(){
		return this._name;
	};
};
