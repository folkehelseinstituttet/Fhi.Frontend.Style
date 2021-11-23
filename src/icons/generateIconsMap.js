const fs = require('fs');
const path = require('path');

const iconsPath = path.join(__dirname, 'svg-icons');
const iconsNameList = path.join(__dirname, '_generated-icon-names.scss');
const iconsMapOutput = path.join(__dirname, '_generated-icons-map.scss');

let iconsCounter = 0;
const svgNameAndContent = [];


const generateIconsSASS = function() {
  // start writing icons map
  fs.writeFile(iconsMapOutput, '$icons:(\n', error => {
    checkForErrors(error);
  });

  // start wrinting list of file names
  fs.writeFile(iconsNameList, '$included-icons:(\n', error => {
    checkForErrors(error);
  });

  getTheFiles(iconsPath);
};


const getTheFiles = function(iconsPath, arrayOfFiles) {
  const files = fs.readdirSync(iconsPath);
  const numberOfFilesInDir = files.length;

  let fileCounter = 0;
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    let currentFile = path.join(iconsPath, '/', file);
    if (fs.statSync(iconsPath + '/' + file).isDirectory()) {
      arrayOfFiles = getTheFiles(iconsPath + '/' + file, arrayOfFiles);
    } else if (path.parse(currentFile).ext === '.svg') {
      fileCounter ++;

      fs.readFile(currentFile, { encoding: 'utf-8' }, (error, data) => {
        checkForErrors(error);

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
                    checkForErrors(error);
                  });

                  fs.appendFile(iconsNameList, `'${svgNameAndContent[i][0]}',\n`, 'utf-8', error => {
                    checkForErrors(error);
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
  fs.appendFile(iconsMapOutput, ');\n', 'utf-8', error => {
    checkForErrors(error);
  });

  fs.appendFile(iconsNameList, ') !default;\n', 'utf-8', error => {
    checkForErrors(error);
  });

  console.info(' * * * [' + iconsMapOutput + '] is generated * * *\n');
}


const getNumberOfSVGs = function(iconsPath, svgCount) {
  files = fs.readdirSync(iconsPath);

  svgCount = svgCount || 0;

  files.forEach(function(file) {
    if (fs.statSync(iconsPath + '/' + file).isDirectory()) {
      svgCount = getNumberOfSVGs(iconsPath + '/' + file, svgCount);
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


function checkForErrors(error) {
  if (error) {
    console.error(error);
    return;
  }
}


generateIconsSASS();
