import {subDays, format} from 'date-fns';

const date = new Date(1998, 4, 15);  // 15 de mayo de 1998
const rta = subDays(date, 10);
const str = format(rta, 'yyyy-MM-dd')

console.log(str);