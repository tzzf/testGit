// function test() {
//     console.log('test');
// }
import { getDog } from './b.js';

function eat() {
    console.log('eat');
}

function work() {
    sleep();
    console.log(1);
}

function sleep() {
    console.log('sleep');
}

console.log('撤销')

console.log('not need test');
function todosomething() {
    getDog();
    console.log('todosomething');
}

function wantdoSomething() {
    console.log('wantdoSomething');
}

wantdoSomething();