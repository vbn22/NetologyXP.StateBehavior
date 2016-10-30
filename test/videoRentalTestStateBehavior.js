import assert from 'assert'
import { Client} from '../src/clientVideoRental'
import { VideoRental} from '../src/videoRental'

/*
## Видеопрокат
* Клиент может взять фильм в прокат
* Клиент может взять несколько фильмов и получить скидку 5% за каждый, но не более 15%
* Не выдавать больше 5 фильмов за раз одному клиенту
* Если клиент не вернул прошлый фильм, не выдавать ему новых
* Приведи друга, получи дополнительную скидку 10%
* Скидка в день рождения 30%
*/

suite('Client in VideoRental', function () {
    let videoRental;
    setup(function () {
        console.log('setup');
    });

    test('Client can get Film', function () {
        let clientStub = {
        	films:0
        }
        videoRental = new VideoRental(clientStub);
        let films = 1;
        assert.equal(videoRental.getFilm(films),1);
    });

    test('Client can get several Films', function () {
        let clientStub = {
        	films:0
        }
        videoRental = new VideoRental(clientStub);
        let films = 3;
        assert.equal(videoRental.getFilm(films),3);
    });


    test('Client get 5% discount per film', function () {
        let clientStub = {
        	films:0
        }
        videoRental = new VideoRental(clientStub);
        let films = 3;
        videoRental.getFilm(films);
        assert.equal(videoRental.calcDiscount,3*5);
    });



    teardown(function() {
        console.log('teardown');
    })
});