let task1 = document.querySelector('.task1');
let task2 = document.querySelector('.task2');
let task3 = document.querySelector('.task3');

task1.textContent = 'Задание 1: ';
task2.textContent = 'Задание 2: ';
task3.textContent = 'Задание 3: ';

for (var i = 0; i < 102; i++) {
    if(i % 2 == 0){
        task1.textContent += i + ' ';
    }    
}

for (var i = 200; i >= 0; i--) {    
        task2.textContent += i + ' ';        
}

let number = 0;
for (var i = 0; i < 101; i++) {    
       number +=i;         
}

task3.textContent += number;