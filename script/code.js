let age = document.getElementById('age');
// let days = age * 365;
let answer = document.getElementById('answer');

answer.addEventListener('click',()=> {
    answer.value=(age.value * 365);
})

