import assert from 'assert'
import sinon from 'sinon'
import { EmailAccount} from '../src/account'
import { Email} from '../src/email'

/*
Почтовый клиент

Я могу добавить аккаунт, с которого буду отправлять и на который буду получать письма
Могу добавить несколько аккаунтов
Я могу отправлять и получать письма
Если у меня отключен интернет, письмо ставится в очередь на отправку
Когда появляется интернет, письмо само отправляется из очереди
Когда отправляю письмо, могу выбрать, с какого аккаунта отправлять

*/

suite('Behavior tests. Tests', function () {
    let email;
    let account;
    let emailMock;
    setup(function(){
        account = new EmailAccount('Michael@mail.ru')
        email = new Email();
        emailMock = sinon.mock(email);
    })

    test('I can add account to email service',function () {
            emailMock.expects('addAccount').once().returns(true);
            email.addAccount(account);
        })

    teardown(function() {
        emailMock.restore();
        emailMock.verify();
    })
});