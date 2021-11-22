const fs = require('fs');
const path = require('path');

const iconsPath = './src/icons/svg-icons/';
const iconsMapOutput = './src/icons/_generated-icons-map.scss';

let iconsCounter = 0;
const svgNameAndContent = [];


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
  const numberOfFilesInDir = files.length;

  let fileCounter = 0;
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    let currentFile = path.join(__dirname, dirPath, '/', file);
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getTheFiles(dirPath + '/' + file, arrayOfFiles);
    } else if (path.parse(currentFile).ext === '.svg') {
      fileCounter ++;

      fs.readFile(currentFile, { encoding: 'utf-8' }, (error, data) => {
        if (error) {
          console.error(error);
          return;
        }

        const currentSVG = [];

        if (path.parse(currentFile).ext === '.svg') {
          // removing all kinds of newlines
          data = data.replace(/(\r\n|\n|\r)/gm, '');

          currentSVG.push(`${path.parse(currentFile).name}`);
          currentSVG.push(`${data}`);

          svgNameAndContent.push(currentSVG);

          iconsCounter ++;

          if (iconsCounter === totalNumberOfIcons) {
            svgNameAndContent.sort(sortSVGName);

            function printList(i) {
              setTimeout(function() {
                if (i < svgNameAndContent.length) {
                  const content = `'${svgNameAndContent[i][0]}':'${svgNameAndContent[i][1]}',\n`;
                  fs.appendFile(iconsMapOutput, content, 'utf-8', error => {
                    if (error) {
                      console.error(error);
                      return;
                    }
                  });
                  i ++;
                  printList(i);
                } else {
                  closeTheMap();
                }
              }, 25);// a small timeout makes sure all icons gets generated correctly
            }
            printList(0);
          }
        }
      });
    };
  });
};


const closeTheMap = function() {
  fs.appendFile(iconsMapOutput, ');\n', 'utf8', error => {
    if (error) {
      console.error(error);
      return;
    }
    console.info(' * * * [' + iconsMapOutput + '] is generated * * *\n');
  });
}


const getNumberOfSVGs = function(dirPath, svgCount) {
  files = fs.readdirSync(dirPath);

  svgCount = svgCount || 0;

  files.forEach(function(file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      svgCount = getNumberOfSVGs(dirPath + '/' + file, svgCount);
    } else if (path.parse(file).ext === '.svg') {
      svgCount ++;
    }
  })

  return svgCount;
}
const totalNumberOfIcons = getNumberOfSVGs(iconsPath);
console.info('\n * * * ' + totalNumberOfIcons + ' SVG icons are found in ' + iconsPath);


function sortSVGName(a, b) {
  if (a[0] === b[0]) {
    return 0;
  } else {
    return (a[0] < b[0]) ? -1 : 1;
  }
}


generateIconsSASS();
