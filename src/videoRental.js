'use strict';


export class VideoRental {
	    constructor(client) {
	        this._client = client;
	    };

	    getFilm(number){
	    	if (this._client.debtor){
	    		/*throw new Error('Debtor can not get film');*/
	    		return this._client.films;
	    	}
	        this._client.films += number;
	        if (this._client.films > 5){
	        	this._client.films = 5;
	        }
	        return this._client.films;
	    };

	    calcDiscount(){
	        this._client.discount = this._client.films * 5;
	        if (this._client.discount > 20){
	        	this._client.discount = 20;
	        }
	        return this._client.discount;
	    };

};
