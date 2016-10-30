import assert from 'assert'
import { Client} from '../src/clientVideoRental'

## Видеопрокат
* Клиент может взять фильм в прокат
* Клиент может взять несколько фильмов и получить скидку 5% за каждый, но не более 15%
* Не выдавать больше 5 фильмов за раз одному клиенту
* Если клиент не вернул прошлый фильм, не выдавать ему новых
* Приведи друга, получи дополнительную скидку 10%
* 

suite('Client in VideoRental', function () {
    var client = new Client();
    setup(function () {
        console.log('setup');
    });


    teardown(function() {
        console.log('teardown');
    })
});