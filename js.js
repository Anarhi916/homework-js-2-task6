let task1 = document.querySelector('.task1');
let task2 = document.querySelector('.task2');
let task3 = document.querySelector('.task3');

let numbers1 = [];
let numbers2 = [];
let numbers3 = 0;

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