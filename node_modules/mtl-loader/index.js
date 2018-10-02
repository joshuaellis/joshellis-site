module.exports = function (source) {
  // Match all occurences of various texture/image formats
  var matches = source.match(/ (.*\.(jpeg|jpg|mpc|mps|mpb|cxc|cxs|cxb|png|tga))/g);
  var trimmedMatches = [];

  if (matches) {
    // Make them unique
    var uniqueMatches = matches.filter((value, index, self) => self.indexOf(value) === index);
    // Trim away matched space at first char
    trimmedMatches = uniqueMatches.map(item => item.trim());
  }

  // Define variable holding the final output from loader
  var result = '';

  // Iterate over matches
  // - Replace occurences of filenames with a reference to a variable instead
  // - Append an import statement for the relevant matched texture/image as a incremental variable called asset${i}
  var replacedSource = source;
  for (let i=0; i<trimmedMatches.length; i++) {
    replacedSource = replacedSource.replace(new RegExp(trimmedMatches[i], 'g'), '" + asset' + i +' +"');
    result += "var asset" + i + " = require('./" + trimmedMatches[i] +"');\n";
  }

  result += "\nvar arr = [];\n";
  var replacedArr = replacedSource.split("\n");
  for (let j=0; j<replacedArr.length; j++) {
    result += "arr.push(\"" + replacedArr[j] + "\");\n";
  }

  result += "\nmodule.exports = arr.join(\"\\n\");";

  return result;
};
