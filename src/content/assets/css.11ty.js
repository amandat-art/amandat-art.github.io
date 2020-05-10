const path = require('path');
const sass = require('node-sass');

const input = path.join(__dirname, '../../sass/main.scss');
const output = 'assets/css/styles.css';

module.exports = class {
  async data () {
    return {
      permalink: output,
      file: input
    };
  };

  async render ({ file, permalink }) {
    return new Promise(
        (resolve, reject) => sass.render(
            { file, outFile: permalink },
            (err, result) => { if (err) { reject(err) } else { resolve(result) } }
        )
    ).then(result => result.css);
  };
}
