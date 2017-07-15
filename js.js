let task1 = document.querySelector('.task1');
let task2 = document.querySelector('.task2');
let task3 = document.querySelector('.task3');
let task4 = document.querySelector('.task4');
let task5 = document.querySelector('.task5');
let task6 = document.querySelector('.task6');
let task7 = document.querySelector('.task7');
let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let button = document.querySelector('button');

let numbers1 = [];
let numbers2 = [];
let numbers3 = 0;
let numbers5 = [];
let numbers6 = 1;
let numbers7 = [];


for (let i = 0; i < 102; i++) {
    if(i % 2 == 0){
        numbers1 += i + ' ';
    }    
}
task1.textContent = 'Задание 1: ' + numbers1;

for (let i = 200; i >= 0; i--) {    
        numbers2 += i + ' ';        
}
task2.textContent = 'Задание 2: ' + numbers2;


for (let i = 0; i < 101; i++) {    
       numbers3 +=i;         
}
task3.textContent = 'Задание 3: ' + numbers3;

button.addEventListener('click', exponentiation);

function exponentiation(){
       let number4 = inp1.value;
       for(let i = 0; i < (inp2.value - 1); i++){
           number4 = number4 * inp1.value;
       }
task4.textContent = 'Результат равен: ' + number4;
}

for (let i = 1; i < 10; i++) {    
        numbers5.push( ' ' + i +  ' * 7 = ' + (i * 7) + ' ');
        
}
task5.textContent = 'Задание 5: ' + numbers5;

for (let i = 1; i < 51; i++) {    
       numbers6 *=i;         
}
task6.textContent = 'Задание 6: ' + numbers6;

for (let i = 1000; i < 2001; i++) {    
        numbers7 += '&#' + i + ' ';        
}
task7.innerHTML = 'Задание 7: ' + numbers7;