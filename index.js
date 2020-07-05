// module.exports = () => {
//   // ...
// };

const fs = require('fs');
const path = require('path');

const readFile = (file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
    }
  });
};

const readDir = (dir) => {
  fs.readdir(dir, (err, files) => {
    if (err) console.log(err);
    else {
      console.log('Filenames with the .md extension:');
      files.forEach((file) => {
        if (path.extname(file) == '.md') readFile(`${dir}/${file}`);
        console.log(`${dir}/${file}`);
      });
    }
  });
};

readDir('./diretório');
