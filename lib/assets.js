/*  
    Package:   package-assets
    Copyright: Ryan Liddle 2018
    License:   MIT
*/

//dependencies 
//library
const fs = require('fs');
const fsPromises = require('fs').promises;
var path = require('path');

//3rd party
var copy = require('recursive-copy');
var findRoot = require('find-root');

//asset manager object
var manager = {};

//resolves the source asset directory by finding
//the root of the package and searching for
//the "source" directory at this location
manager.resolveAssetDir = (source) => {
    if (source === undefined){
        source = manager.assetDir;
    }
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
manager.copyAssetDir = (dest) => {
    if (dest === undefined){
        dest = "";
    }
    const source =  manager.assetDir;
    //copy source to cwd
    return copy(manager.resolveAssetDir(source), manager.resolveDestDir(dest))
}

//Reads a source asset and returns a string 
//Args:
// path (required): the relative path to the set asset 
// package root
// options (optional): passed to fs.readFileSync
// see: https://nodejs.org/api/fs.html#fs_fspromises_readfile_path_options
manager.readAsset = (filePath, options) => {
    if (options === undefined) {
        options = {};
    }
    filePath = path.join(manager.assetDir, filePath);
    return fsPromises.readFile(manager.resolveAssetDir(filePath), options);
}

//Setter method for the asset directory
//Args:
// assetDir (required): the relative path to the desired asset
// directory from the package root
//Return:
// bool: indicating success setting the asset directory.
manager.setAssetDir = (assetDir) => {
    if(fs.existsSync(manager.resolveAssetDir(assetDir))){
        manager.assetDir = assetDir;
        return true;
    }
    return false;
}

//Writes an asset file back to the asset directory 
//Args:
// filePath (required): the path to create/replace
// the file under the asset directory
// fileContent (optional): the file content to write
manager.writeAsset = (filePath, fileContent, options) => {
    if (options === undefined){
        options = {};
    }

    if (fileContent === undefined){
        fileContent = "";
    }
    
    filePath = path.join(manager.assetDir, filePath);
    return fsPromises.writeFile(filePath, fileContent, options);
}


//export modules
module.exports = (assetDir) => {
    if (assetDir === undefined){
        assetDir = '';
    }
    manager.setAssetDir(assetDir);
    return manager;
}

