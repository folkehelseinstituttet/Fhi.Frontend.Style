const fs = require('fs');
const path = require('path');

const iconsPath = path.join(__dirname, 'svg-icons');
const iconsNameList = path.join(__dirname, 'icon-list.GENERATED.md');
const iconsMapOutput = path.join(__dirname, '_icon-map.GENERATED.scss');

let iconsCounter = 0;
const svgNameAndContent = [];

const generateIconsSASS = function () {
  // start writing icons map
  fs.writeFile(iconsMapOutput, '$icons: (\n', (error) => {
    checkForErrors(error);
  });

  // start wrinting list of file names
  fs.writeFile(iconsNameList, '```scss\n$included-icons: (\n', (error) => {
    checkForErrors(error);
  });

  getTheFiles(iconsPath);
};

const getTheFiles = function (iconsPath, arrayOfFiles) {
  const files = fs.readdirSync(iconsPath);

  let fileCounter = 0;
  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    let currentFile = path.join(iconsPath, '/', file);
    if (fs.statSync(iconsPath + '/' + file).isDirectory()) {
      arrayOfFiles = getTheFiles(iconsPath + '/' + file, arrayOfFiles);
    } else if (path.parse(currentFile).ext === '.svg') {
      fileCounter++;

      fs.readFile(currentFile, { encoding: 'utf-8' }, (error, data) => {
        checkForErrors(error);

        const currentSVG = [];

        // removing all kinds of newlines, comments, xml definition and description
        data = data.replace(
          /(\r\n|\n|\r|<!--(.*?)-->|<\?xml.*?\?>|<desc>(.*?)<\/desc>)/gm,
          '',
        );
        // removing multiple spaces
        data = data.replace(/  +/g, '');

        currentSVG.push(`${path.parse(currentFile).name}`);
        currentSVG.push(`${data}`);

        svgNameAndContent.push(currentSVG);

        iconsCounter++;

        if (iconsCounter === totalNumberOfIcons) {
          svgNameAndContent.sort(sortSVGName);

          function printList(i) {
            setTimeout(function () {
              if (i < svgNameAndContent.length) {
                const content = `'${svgNameAndContent[i][0]}':'${svgNameAndContent[i][1]}',\n`;
                fs.appendFile(iconsMapOutput, content, 'utf-8', (error) => {
                  checkForErrors(error);
                });

                fs.appendFile(
                  iconsNameList,
                  `  '${svgNameAndContent[i][0]}',\n`,
                  'utf-8',
                  (error) => {
                    checkForErrors(error);
                  },
                );
                i++;
                printList(i);
              } else {
                closeTheMap();
              }
            }, 25); // a small timeout makes sure all icons gets generated correctly
          }
          printList(0);
        }
      });
    }
  });
};

const closeTheMap = function () {
  // close up the icons map
  fs.appendFile(iconsMapOutput, ');\n', 'utf-8', (error) => {
    checkForErrors(error);
  });

  // close up the file names list (for reference)
  fs.appendFile(iconsNameList, ')\n```\n', 'utf-8', (error) => {
    checkForErrors(error);
  });

  console.info(' * * * [' + iconsMapOutput + '] is generated * * *\n');
};

const getNumberOfSVGs = function (iconsPath, svgCount) {
  files = fs.readdirSync(iconsPath);

  svgCount = svgCount || 0;

  files.forEach(function (file) {
    if (fs.statSync(iconsPath + '/' + file).isDirectory()) {
      svgCount = getNumberOfSVGs(iconsPath + '/' + file, svgCount);
    } else if (path.parse(file).ext === '.svg') {
      svgCount++;
    }
  });

  return svgCount;
};
const totalNumberOfIcons = getNumberOfSVGs(iconsPath);
console.info(
  '\n * * * ' + totalNumberOfIcons + ' SVG icons are found in ' + iconsPath,
);

const sortSVGName = function (a, b) {
  if (a[0] === b[0]) {
    return 0;
  } else {
    return a[0] < b[0] ? -1 : 1;
  }
};

const checkForErrors = function (error) {
  if (error) {
    console.error(error);
    return;
  }
};

generateIconsSASS();
