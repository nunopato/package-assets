var copy = require('recursive-copy');
var findRoot = require('find-root');
var path = require('path');

//resolves the source asset directory by finding
//the package root of the package and searching for
//the "source" directory at this location
var resolveSourceDir = (source) => {
    //extract the file path
    var filePath = path.dirname(require.main.filename);
    var fileRoot = findRoot(filePath);

    //resolve source path
    return path.resolve(fileRoot, source);
};

//cwd + optional "dest" directory
var resolveDestDir = (dest) => {
    return path.resolve(process.cwd(), dest);
};

//Copies a source asset directory in your package to 
//the current working directory. 
//Args:
// source (required): the source directory in the root
// level of your package.
// dest (optional): copies the content of your source 
// directory into an optional directory.
var copyAssetDir = (source, dest="") => {
    if (source === undefined) {
        console.error("Error: copyDir takes a source directory and an optional destination directory.");
        return;
    }
    //copy source to cwd
    return copy(resolveSourceDir(source), resolveDestDir(dest))
    .then(function(results) {
       return results.length;
    })
    .catch(function(error) {
        console.error('Copy failed: ' + error);
    });
}

module.exports = {
    copyAssetDir : copyAssetDir,
    resolveSourceDir : resolveSourceDir,
    resolveDestDir : resolveDestDir
}