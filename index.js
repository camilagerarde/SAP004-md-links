// module.exports = () => {
//   // ...
// };

const fs = require('fs');
fs.readFile('./README.md', 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
console.log('depois');
