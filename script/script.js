'use strict';

const arr = ['123', '234', '345', '467', '247', '999', '489'];

arr.forEach((item) => {
  if ( item.startsWith('2') || item.startsWith('4')) {
    console.log(item);
  }
  });

outher: 
for (let i = 2; i <= 100; i++) {

  for (let j = 2; j < i; j++ ) {
    if ( i % j === 0) continue outher;
  }
  console.log(i + ' Делители этого числа: 1 и ' + i);
}


