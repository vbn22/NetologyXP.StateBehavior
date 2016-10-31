import assert from 'assert'
import { Client} from '../src/clientVideoRental'
import { VideoRental} from '../src/videoRental'

/*
## Видеопрокат
* Клиент может взять фильм в прокат
* Клиент может взять несколько фильмов и получить скидку 5% за каждый, но не более 20%
* Не выдавать больше 5 фильмов за раз одному клиенту
* Если клиент не вернул прошлый фильм, не выдавать ему новых
* Приведи друга, получи дополнительную скидку 10%
* Скидка в день рождения 20%
*/

suite('Client in VideoRental', function () {
    let videoRental;
    let clientStub;
    setup(function () {
        clientStub = {
        	films:0,
        	discount:0,
        	debtor:false,
        	friend:0,
        	dateOfBirth:new Date('10 06 1990')
        }
        videoRental = new VideoRental(clientStub);
    });

    test('Client can get Film', function () {
        let films = 1;
        assert.equal(videoRental.getFilm(films),1);
    });

    test('Client can get several Films', function () {
        let films = 3;
        assert.equal(videoRental.getFilm(films),3);
    });


    test('Client get 5% discount per film', function () {
        videoRental.getFilm(3);
        videoRental.calcDiscount();
        assert.equal(clientStub.discount,3*5);
    });

    test('Max discount is 20%', function () {
        videoRental.getFilm(5);
        videoRental.calcDiscount();
        assert.equal(clientStub.discount,20);
    });

    test('Max fimls is 5', function () {
        videoRental.getFilm(6);
        assert.equal(clientStub.films,5);
    });

    test('Debtor does not get film', function () {
    	clientStub.debtor = true;
        videoRental.getFilm(3);
        assert.equal(clientStub.films,0);
    });

    test('Discount 20% if today is Date of Birth', function () {
    	clientStub.dateOfBirth = new Date();
    	videoRental.calcDiscount();
        assert.equal(clientStub.discount,20);
    });

    teardown(function() {
        console.log('teardown');
    })
});