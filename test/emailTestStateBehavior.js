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

/*
- какой класс тестируем?
- какие зависимости заменяем на тест-дублеры?
- В какой ситуации тест может упасть?
*/

suite('Behavior tests. Tests', function () {
    let email;
    let account;
    let emailMock;
    let message;
    setup(function(){
        account = new EmailAccount('Michael@mail.ru')
        email = new Email();
        emailMock = sinon.mock(email);
        message = {from:'Michael@mail.ru',to:'support@mail.ru',text:'hi man'};
    })

    test('I can add account to email service',function () {
            emailMock.expects('addAccount').returns(1);
            email.addAccount(account);

            // тестируем Email класс
            // подменяем addAccount
            // тест может упасть если аккаунт не добавится
        })

    test('I can add several accounts to email service',function () {
            emailMock.expects('addAccounts').returns(2);
            email.addAccounts([account,account]);
 
            // тестируем Email класс
            // подменяем addAccounts
            // тест может упасть если несколько аккаунтов не добавтся
        })

    test('I can send message',function () {
            emailMock.expects('connect').once();
            email.addAccount(account);
            email.sendMessage(message);

            // тестируем Email класс
            // подменяем connect
            // тест модет упасть если при отправки сообщения не будет вызван connect
        })

    suite('When is not connection to internet', function () {
        test('Message add to queue',function () {
            email.network_status = false;
            emailMock.expects('messageToQueue').withArgs(message);
            email.addAccount(account);
            email.sendMessage(message);

            // тестируем Email класс
            // подменяем messageToQueue
            // тест упадет если при отправке сообщения не будет вызван 
            // messageToQueue с аргументами ..
        });
    });

    suite('When connection is not ok', function () {
        test('Don not send messages from queue',function () {
            email.network_status = false;
            emailMock.expects('connect').never();
            email.addAccount(account);
            email.sendMessage(message);

            // тестируем Email класс
            // подменяем connect
            // тест упадет если произойдет вызов connect при отсутствии соединения
        });
    });

    test('Change account from',function () {
        let account_second = new EmailAccount('second@mail.ru')
        emailMock.expects('sendMessage').returns(true);
        email.addAccount(account);
        email.addAccount(account_second);
        let secondMessage = {from:'second@mail.ru',to:'support@mail.ru',text:'hi man'};
        email.sendMessage(secondMessage)

        // тестируем Email класс
        // подменяем sendMessage
        // тест упадет если sendMessage вернет false (неудачу ппри попытке отправки письма)
    });


    teardown(function() {
        emailMock.restore();
        emailMock.verify();
    })
});