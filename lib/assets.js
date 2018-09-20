/*  
    Package:   package-assets
    Copyright: Ryan Liddle 2018
    License:   MIT
*/

//dependencies 
//library
var fs = require('fs');
var path = require('path');

//3rd party
var copy = require('recursive-copy');
var findRoot = require('find-root');

//asset manager object
var manager = {};

//resolves the source asset directory by finding
//the root of the package and searching for
//the "source" directory at this location
manager.resolveSourceDir = (source) => {
    //extract the file path
    var filePath = path.dirname(require.main.filename);
    var fileRoot = findRoot(filePath);

    //resolve source path
    return path.resolve(fileRoot, source);
};

//cwd + optional "dest" directory
manager.resolveDestDir = (dest) => {
    return path.resolve(process.cwd(), dest);
};

//Copies a source asset directory in your package to 
//the current working directory. 
//Args:
// source (required): the source directory in the root
// level of your package.
// dest (optional): copies the content of your source 
// directory into an optional directory.
manager.copyAssetDir = (dest="") => {
    const source =  manager.assetDir;
    //copy source to cwd
    return copy(manager.resolveSourceDir(source), manager.resolveDestDir(dest))
    .then(function(results) {
       return results.length;
    })
    .catch(function(error) {
        console.error('Copy failed: ' + error);
    });
}

//Reads a source asset and returns a string 
//Args:
// path (required): the relative path to the resource
// from the package root.
// options (optional): passed to fs.readFileSync
// see: https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options
manager.readAsset = (path, options="") => {
    if (options === undefined) {
        options = {};
    }
    return fs.readFileSync(manager.resolveSourceDir(path), options);
}


//export modules
module.exports = (assetDir) => {
    manager.assetDir = assetDir;
    return manager;
}

