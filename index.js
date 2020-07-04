// module.exports = () => {
//   // ...
// };

const fs = require('fs');

// fs.readFile('./README.md', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

fs.readdir('./test', (err, files) => {
  if (err) console.log(err);
  else {
    console.log('Current directory filenames:');
    files.forEach((file) => {
      console.log(file);
    });
  }
});

// const regExp = /\(\d{2,3}\)\s\d{4,5}-?\d{4}/g;
// let telefone =
//   'o telefone é (48) 12345-6789 tratar com João, o telefone é (48) 00000-6789 tratar com Maria';

// console.log(telefone.match(regExp));
