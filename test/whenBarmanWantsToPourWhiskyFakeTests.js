/**
 * Created by 1 on 18.10.2016.
 */
import assert from 'assert'
import { Barman } from '../src/barmen'
import { Client} from '../src/client'


suite('Stub: when client ask 200 grams of whisky', function () {
    var client = new Client();
    let drinkName = 'whisky';
    setup(function(){
        client.sober();
    })
    let cupboardFake = {
        whiskyVolume:500,
        isOpen: function (hour) {
            if (hour > 9 && hour < 23){
                return true;
            } else {
                return false;
            }
        },
        hasDrink: function (drinkName, volume) {
            if ((this.whiskyVolume > volume) && drinkName == 'whisky'){
                return true;
            } else {
                return false;
            }
        },
        getDrink: function (drinkName, volume) {
            if (drinkName == 'whisky'){
                this.whiskyVolume -= volume;
                return volume;
            }
        }
    }
    let barman = new Barman(cupboardFake);
    suite('barman has enough', function () {
        test('Bar is open',function(){
            assert.equal(true,cupboardFake.isOpen(12));
        })

        test('Barman pour 200 grams of whisky',function(){
            let clientAskValume = 200;
            let volumeInGlass =  barman.pour(drinkName,clientAskValume,client);
            assert.equal(clientAskValume,volumeInGlass);
        })
    });

    suite('Types of drinks in bar', function () {
        test('cocktail is not',function(){
            assert.equal(false,cupboardFake.hasDrink('cocktail',100));
        })
        test('whisky',function(){
            assert.equal(true,cupboardFake.hasDrink('whisky',100));
        })
    });


    teardown(function() {
        console.log('teardown');
    })
});