'use strict';


export function Client() {
    class Client {
	    constructor(debtor) {
	        this._debtor = debtor;
	    };

	    get debtor() {
	        return this._debtor;
	    };

	    canGetFilm(){
	        if (!this.debtor){
	            return true;
	        } else {
	            return false;
	        }

	    }
	    getFilms(number){
	        let countFilms; 
	        return countFilms;
	    }
	    getBasePriceForFilms(number){
	        let price;
	        return price;
	    }
	    getDiscountPriceForFilms(number){
	        let discount;
	        return discount;
	    }
	    getDiscountForFriends(friends){
	        let discount;
	        return discount;
	    }
	}
};
