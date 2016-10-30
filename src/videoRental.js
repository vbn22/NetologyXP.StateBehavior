'use strict';


export class VideoRental {
	    constructor(client) {
	        this._client = client;
	        this._discount = 0;
	    };

	    getFilm(number){
	        this._client.films += number;
	        return this._client.films;
	    };

	    get calcDiscount(){
	        this._discount = this._client.films * 5;
	        if (this._discount > 15){
	        	this._discount = 15;
	        }
	        return this._discount;
	    };

};
