'use strict';


export class Client {
	    constructor(films=0,debtor=false,friends=0) {
	        this._debtor = debtor;
	        this._friends = friends;
	        this._films = films;
	    };

	    get debtor() {
	        return this._debtor;
	    };

	    get films() {
	        return this._films;
	    };

	    addFilms(number){
	        this._films  += number
	        return this._films;
	    }

};
