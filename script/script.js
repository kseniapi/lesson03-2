'use strict';

const lang = prompt('Введите значение lang');

if ( lang === 'ru') {
console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
} else if ( lang === 'en') {
console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
}

switch (lang) {
case 'ru': 
console.log('Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
break;
case 'en':
console.log('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday');
}

let dayArr = [];
dayArr['en'] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
dayArr['ru'] = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
console.log(dayArr[lang]);

const namePerson = prompt ('Введите имя');
const message = (namePerson === 'Артем') ? 'директор' :
(namePerson === 'Максим') ? 'преподаватель' :
'студент';
console.log(message);

