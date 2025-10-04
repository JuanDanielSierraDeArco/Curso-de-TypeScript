import _ from 'lodash';

const data = [
  { username: 'jsierra', role: 'admin' },
  { username: 'jdoe', role: 'editor' },
  { username: 'msmith', role: 'viewer' },
];

const rta = _.groupBy(data, item => item.role);

console.log(rta);


