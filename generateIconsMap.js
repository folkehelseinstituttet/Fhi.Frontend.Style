const fs = require('fs');
const path = require('path');

const iconsPath = './src/icons/svg-icons/';
const iconsMapOutput = './src/icons/_generated-icons-map.scss';

let totalNumberOfIcons = 0;
let iconsCounter = 0;


const generateIconsSASS = function() {
  fs.writeFile(iconsMapOutput, '$icons:(', error => {
    if (error) {
      console.error(error);
      return;
    }
  });

  getTheFiles(iconsPath);
};


const getTheFiles = function(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file, index) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getTheFiles(dirPath + '/' + file, arrayOfFiles);
    } else if (path.parse(path.join(__dirname, dirPath, '/', file)).ext === '.svg') {
      arrayOfFiles.push(path.join(__dirname, dirPath, '/', file));

      fs.readFile(arrayOfFiles[index], { encoding: 'utf-8' }, (error, data) => {
        if (error) {
          console.error(error);
          return;
        }

        if (path.parse(arrayOfFiles[index]).ext === '.svg') {
          // removing newlines
          data = data.replace(/(\r\n|\n|\r)/gm, '');
          const content = `'${path.parse(arrayOfFiles[index]).name}':'${data}',\n`;
          fs.appendFile(iconsMapOutput, content, 'utf-8', closeMap, error => {
            if (error) {
              console.error(error);
              return;
            }
          });

          console.info(iconsCounter, totalNumberOfIcons);

          iconsCounter ++;
        }
      });
    };
  });
};


const closeMap = function() {
  if (iconsCounter === totalNumberOfIcons) {
    fs.appendFile(iconsMapOutput, ');\n', 'utf8', error => {
      if (error) {
        console.error(error);
        return;
      }
      console.info('\n * * * $icons map is generated * * *\n');
    });
    iconsCounter ++;
  }
}


const getNumberOfFiles = function(dirPath, svgCount) {
  files = fs.readdirSync(dirPath);

  svgCount = svgCount || 0;

  files.forEach(function(file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      svgCount = getNumberOfFiles(dirPath + '/' + file, svgCount);
    } else if (path.parse(file).ext === '.svg') {
      svgCount ++;
    }
  })

  return svgCount;
}


totalNumberOfIcons = getNumberOfFiles(iconsPath);
console.info('\n' + totalNumberOfIcons + ' SVG icons are found in ' + iconsPath);

generateIconsSASS();
