'use strict';

function getStr (str) {
if (typeof str !== 'string') {
  alert('Это не строка'); 
}
str = str.trim();
if (str.length > 30) {
  str = str.substr(0, 30) + '...';
}
  return str;
}

getStr (    '1111111111111111111111111111111'   );

